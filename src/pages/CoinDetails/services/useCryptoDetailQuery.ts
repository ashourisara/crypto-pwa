import { useQuery } from "@tanstack/react-query";
import { cryptoDetailKey, getCryptoDetail } from "../../../services/api";

export const useCryptoDetailQuery = ({
  coinId,
}: {
  coinId: string | undefined;
}) => {
  const cryptoDetail = useQuery({
    queryKey: cryptoDetailKey(coinId!),
    queryFn: () => getCryptoDetail(coinId!),
    enabled: !!coinId,
    throwOnError: true,
  });

  return cryptoDetail;
};
