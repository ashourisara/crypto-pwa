import Stat from "../ui/Stat";
import type { CryptoDetail } from "../../../services/api/types";
import { formatLargeNumber } from "../../../utils/formatters";

interface MarketStatsProps {
  detail: CryptoDetail;
}

const MarketStats = ({ detail }: MarketStatsProps) => {
  const { market_data, symbol } = detail;

  return (
    <div>
      <Stat
        title="Volume 24h"
        value={`$${formatLargeNumber(market_data.total_volume.usd)}`}
      />
      <Stat
        title="Market Cap"
        value={`$${formatLargeNumber(market_data.market_cap.usd)}`}
      />
      <Stat
        title="Circulating Supply"
        value={`${formatLargeNumber(
          market_data.circulating_supply
        )} ${symbol.toUpperCase()}`}
      />
    </div>
  );
};

export default MarketStats;
