import instance from "../instance";
import type { CryptoCurrency, CryptoDetail, MarketChartData } from "./types";

// -------------------------- getCryptoList --------------------------

export const getCryptoList = async ({
  pageParam = 1,
}): Promise<CryptoCurrency[]> => {
  const response = await instance.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 5,
      page: pageParam,
      sparkline: false,
    },
  });
  return response.data;
};

export const cryptoListKey = () => ["cryptoList"];

// -------------------------- getCryptoDetail --------------------------

export const getCryptoDetail = async (id: string): Promise<CryptoDetail> => {
  const response = await instance.get(`/coins/${id}`);
  return response.data;
};

export const cryptoDetailKey = (coinId: string) => ["cryptoDetail", coinId];

// -------------------------- getCryptoChartData --------------------------
export const getCryptoChartData = async (
  id: string
): Promise<MarketChartData> => {
  const response = await instance.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 7,
    },
  });
  return response.data;
};

export const cryptoChartDataKey = (coinId: string) => ["cryptoChart", coinId];
