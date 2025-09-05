export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
}

interface CoinImage {
  thumb: string;
  small: string;
  large: string;
}

export interface CryptoDetail {
  id: string;
  symbol: string;
  name: string;
  image: CoinImage;
  market_cap_rank: number;
  market_data: {
    market_cap: { usd: number };
    total_volume: { usd: number };
    circulating_supply: number;
    current_price: { usd: number };
    price_change_percentage_24h: number;
  };
}

export interface MarketChartData {
  prices: [number, number][]; // [timestamp, price]
}
