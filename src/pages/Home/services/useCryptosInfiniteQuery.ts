import { useInfiniteQuery } from "@tanstack/react-query";
import { cryptoListKey, getCryptoList } from "../../../services/api";

export const useCryptosInfiniteQuery = () => {
  const cryptoList = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: cryptoListKey(),
    queryFn: getCryptoList,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 5) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
  return cryptoList;
};
