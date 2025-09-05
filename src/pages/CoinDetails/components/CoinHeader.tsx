import { Typography } from "antd";
import type { CryptoDetail } from "../../../services/api/types";

const { Title } = Typography;

interface CoinHeaderProps {
  detail: CryptoDetail;
}

const CoinHeader = ({ detail }: CoinHeaderProps) => {
  const isPositive = detail.market_data.price_change_percentage_24h >= 0;

  return (
    <div className="flex flex-col flex-wrap content-start gap-4">
      <div className="flex items-center gap-4">
        <img
          src={detail.image.large}
          alt={`${detail.name} logo`}
          className="w-16 h-16"
        />
        <div>
          <Title level={2} className="!m-0 !text-3xl !mobile:text-xl">
            {detail.name}
          </Title>
        </div>
      </div>

      <div>
        <Title level={1} className="!m-0">
          ${detail.market_data.current_price.usd.toLocaleString()}
        </Title>
        <span
          className="text-lg font-semibold"
          style={{ color: isPositive ? "green" : "red" }}
        >
          {isPositive && "+"}
          {detail.market_data.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default CoinHeader;
