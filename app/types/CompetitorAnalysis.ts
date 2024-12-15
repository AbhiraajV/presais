export interface TopKeyword {
  name: string;
  volume: number;
  CPC: number;
}

export interface Competitor {
  title: string;
  visits: number;
  marketShare: string;
}

export interface CompetitorAnalysisData {
  ideaAssessment: {
    businessExistence: {
      status: string;
      description: string;
    };
    competitorAnalysis: {
      keywordOpportunityInsights: {
        summary: string;
        keyMetrics: {
          topKeywords: TopKeyword[];
        };
        conclusion: string;
      };
      marketGapVisualization: {
        opportunities: string[];
        threats: string[];
      };
    };
    trafficSourceOptimizationSuggestions: {
      competitorTrends: {
        search: {
          description: string;
          percentage: number;
        };
        direct: {
          description: string;
          percentage: number;
        };
      };
      recommendation: string;
    };
    globalAndLocalCompetitorHeatmap: {
      dominantCountries: string[];
      recommendation: string;
    };
    estimatedMarketShareProjection: {
      currentCompetitors: Competitor[];
      potentialShare: {
        description: string;
        range: {
          min: number;
          max: number;
        };
      };
    };
    customSaaSPerformanceScore: {
      criteria: {
        uniqueness: number;
        marketDemand: number;
        competition: number;
        executionComplexity: number;
      };
      score: number;
    };
    adBudgetRecommendations: {
      searchAds: {
        budget: string;
        focus: string;
      };
      socialMediaAds: {
        budget: string;
        focus: string;
      };
    };
  };
}