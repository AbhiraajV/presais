export interface Competitor {
  title: string;
  visits: number;
  marketShare: string;
}

export interface MarketShareProjection {
  currentCompetitors: Competitor[];
  potentialShare: {
    description: string;
    range: {
      min: number;
      max: number;
    };
  };
}

export interface MarketSizeAnalysis {
  totalMarketSize: number;
  monthlyActiveUsers: number;
  growthTrend: {
    description: string;
    rate: number;
  };
  recommendation: string;
}