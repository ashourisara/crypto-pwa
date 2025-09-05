export const formatLargeNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return `${Math.round(num / 1_000_000_000).toLocaleString()}B`;
  }
  if (num >= 1_000_000) {
    return `${Math.round(num / 1_000_000)}M`;
  }
  return num.toLocaleString();
};

export const formatChartDate = (date: number | Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));
};
