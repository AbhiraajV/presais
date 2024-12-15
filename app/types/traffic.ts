export interface TrafficTrend {
  description: string;
  percentage: number;
}

export interface TrafficSourceOptimization {
  competitorTrends: {
    search: TrafficTrend;
    direct: TrafficTrend;
    social: TrafficTrend;
    mails: TrafficTrend;
    referals: TrafficTrend;
  };
  recommendation: string;
}