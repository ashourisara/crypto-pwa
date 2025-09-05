import { useState, useMemo } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Empty, Space } from "antd";
import SearchInput from "./ui/SearchInput";
import CryptoListItem from "./components/CryptoListItem";
import { useCryptosInfiniteQuery } from "./services";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isPending, error } = useCryptosInfiniteQuery();

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) =>
      page.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const { visibleCount, lastElementRef } = useInfiniteScroll({
    isLoading: isPending,
    totalItems: filteredData.length,
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) throw error;

  return (
    <Space direction="vertical" size="large" className="w-full">
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a cryptocurrency..."
      />

      {filteredData.length > 0 ? (
        <Space direction="vertical" className="w-full">
          {filteredData.slice(0, visibleCount).map((crypto, index) => (
            <div
              key={crypto.id}
              ref={index === visibleCount - 1 ? lastElementRef : null}
            >
              <CryptoListItem crypto={crypto} />
            </div>
          ))}
        </Space>
      ) : (
        <Empty description="No cryptocurrencies found." />
      )}
    </Space>
  );
};

export default HomePage;
