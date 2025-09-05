import { useQuery } from "@tanstack/react-query";
import { cryptoChartDataKey, getCryptoChartData } from "../../../services/api";

export interface UseCryptoChartQueryOptions {
  coinId: string | undefined;
  isChartDetail: boolean;
}

export const useCryptoChartQuery = ({
  coinId,
  isChartDetail,
}: UseCryptoChartQueryOptions) => {
  const cryptoChart = useQuery({
    queryKey: cryptoChartDataKey(coinId!),
    queryFn: () => getCryptoChartData(coinId!),
    enabled: isChartDetail,
    throwOnError: true,
  });

  return cryptoChart;
};
