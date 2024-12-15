export const formatNumber = (num: number) => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  return num.toLocaleString();
};

export const formatPercentage = (num: number) => `${num.toFixed(1)}%`;