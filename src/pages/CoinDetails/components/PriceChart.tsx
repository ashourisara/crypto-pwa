import { Line } from "@ant-design/charts";
import { formatChartDate } from "../../../utils/formatters";
import { useThemeContext } from "../../../hooks/useThemeContext";
import type { MarketChartData } from "../../../services/api/types";

interface PriceChartProps {
  chartData: MarketChartData;
}

const PriceChart = ({ chartData }: PriceChartProps) => {
  const { theme } = useThemeContext();

  const dailyAverages = chartData.prices.reduce((acc, [timestamp, price]) => {
    const date = new Date(timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { total: 0, count: 0 };
    }
    acc[date].total += price;
    acc[date].count += 1;
    return acc;
  }, {} as Record<string, { total: number; count: number }>);

  const aggregatedData = Object.keys(dailyAverages).map((date) => {
    const avgPrice = dailyAverages[date].total / dailyAverages[date].count;
    return {
      date: formatChartDate(new Date(date)),
      price: avgPrice,
    };
  });

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const chartConfig = {
    data: aggregatedData,
    xField: "date",
    yField: "price",
    smooth: true,
    theme: {
      type: theme,
    },
    axis: {
      y: {
        labelFormatter: (v: string) => currencyFormatter.format(parseFloat(v)),
      },
    },
    lineStyle: {
      stroke: "#1677ff",
      lineWidth: 4,
    },

    tooltip: {
      title: "Price",
      items: [
        {
          channel: "y",
          valueFormatter: (price: number) => `$ ${price.toFixed(2)}`,
        },
      ],
    },
    legend: false,
  };

  return <Line {...chartConfig} />;
};

export default PriceChart;
