export type CompetitionLevel = "Low" | "Medium" | "High" | string;

export interface RecommendedKeyword {
  name: string;
  competitionLevel: CompetitionLevel;
}

export interface TopKeyword {
  name: string;
  volume: number;
  CPC: number;
  competitionLevel: CompetitionLevel;
}

export interface KeywordOpportunityInsights {
  summary: string;
  recommendedKeywords: RecommendedKeyword[];
  topKeywords: TopKeyword[];
  conclusion: string;
}

export interface MarketGapVisualization {
  opportunities: string[];
  threats: string[];
}