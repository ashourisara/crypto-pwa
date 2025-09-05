import { Card, Avatar, Typography } from "antd";
import type { CryptoCurrency } from "../../../services/api/types";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

interface CryptoListItemProps {
  crypto: CryptoCurrency;
}

const CryptoListItem = ({ crypto }: CryptoListItemProps) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <Link to={`/coin/${crypto.id}`}>
      <Card hoverable className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar src={crypto.image} size="large" />
            <div>
              <Title level={5} className="!mb-0">
                {crypto.name}
              </Title>
              <Text type="secondary">{crypto.symbol.toUpperCase()}</Text>
            </div>
          </div>

          <div className="text-right flex flex-col gap-1">
            <Text strong className="block">
              ${crypto.current_price.toLocaleString()}
            </Text>
            <span style={{ color: isPositive ? "green" : "red" }}>
              {isPositive && "+"}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CryptoListItem;
