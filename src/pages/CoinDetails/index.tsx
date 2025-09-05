import { useParams } from "react-router-dom";
import { Card, Empty } from "antd";
import PriceChart from "./components/PriceChart";
import MarketStats from "./components/MarketStats";
import CoinHeader from "./components/CoinHeader";
import BackButton from "./ui/BackButton";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useCryptoDetailQuery, useCryptoChartQuery } from "./services";

const CoinDetailsPage = () => {
  const { coinId } = useParams<{ coinId: string }>();

  const { data: chartDetail, isPending: isLoadingDetail } =
    useCryptoDetailQuery({ coinId });

  const { data: chartData, isPending: isLoadingChart } = useCryptoChartQuery({
    coinId,
    isChartDetail: !!chartDetail,
  });

  if (isLoadingDetail || isLoadingChart) {
    return <LoadingSpinner />;
  }

  if (!chartDetail || !chartData)
    return <Empty description="No cryptocurrency found." />;

  return (
    <div className="w-full">
      <BackButton />
      <Card>
        <CoinHeader detail={chartDetail} />
        <MarketStats detail={chartDetail} />
        <PriceChart chartData={chartData} />
      </Card>
    </div>
  );
};

export default CoinDetailsPage;
