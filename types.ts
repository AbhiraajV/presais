type TrafficSources = {
  Social: number;
  "Paid Referrals": number;
  Mail: number;
  Referrals: number;
  Search: number;
  Direct: number;
};

type TopCountryShare = {
  Country: number;
  CountryCode: string;
  Value: number;
};

type EstimatedMonthlyVisits = Record<string, number>;

type Keyword = {
  Name: string;
  EstimatedValue: number;
  Volume: number;
  Cpc: number;
};

type Engagements = {
  BounceRate: string;
  Month: string;
  Year: string;
  PagePerVisit: string;
  Visits: string;
  TimeOnSite: string;
};

type Rank = {
  Rank: number;
  Category?: string;
};

type Competitors = {
  TopSimilarityCompetitors: unknown[]; // Update if the structure is known
};

type Notification = {
  Content: null | string; // Update if the structure changes
};

export type SiteData = {
  Version: number; //done
  SiteName: string; //done
  Description: string;//done
  TopCountryShares: TopCountryShare[]; //done
  Title: string;//done
  GlobalRank: Rank; //done
  CountryRank: Rank; //done
  CategoryRank: Rank; //done
  GlobalCategoryRank: null | string; //done
  IsSmall: boolean; //done
  Policy: number; //done
  Category: string; //done
  LargeScreenshot: string; //done
  IsDataFromGa: boolean;  //done
  Notification: Notification; //done
  SnapshotDate: string; //done
  
  
  Engagements: Engagements;
  Competitors: Competitors;


  EstimatedMonthlyVisits: EstimatedMonthlyVisits; //done
  TrafficSources: TrafficSources; //done
  TopKeywords: Keyword[];  //done

  tags:unknown;
  similarSites:SimilarSite[]; //done
  totalVisits:number | null; //done
};


export interface SimilarSite {
  Site: string;
  Description: string;
  CategoryRank: number;
  Title: string;
  TopCountryRank: number;
  TopCountry: number;
  TotalVisits: number;
  GlobalRank: number;
  Thumbnail: string;
}

export interface SimilarSiteData {
  TopCountryRank: number;
  Tags:unknown;
  TotalVisits:unknown;
  Redirect:unknown;
  SimilarSites: SimilarSite[];
}


export interface TopKeyword {
  name: string;
  volume: number;
  CPC: number;
  competitionLevel: string;
}

export interface RecommendedKeyword {
  name: string;
  competitionLevel: string;
}

export interface KeywordAnalysisProps {
  summary: string;
  recommendedKeywords: RecommendedKeyword[];
  topKeywords: TopKeyword[];
  conclusion: string;
}

export interface Competitor {
  title: string;
  visits: number;
  marketShare: string;
}

export interface MarketShareProps {
  competitors: Competitor[];
  potentialShare: {
    description: string;
    range: {
      min: number;
      max: number;
    };
  };
}

export interface PerformanceScoreProps {
  criteria: {
    uniqueness: number;
    marketDemand: number;
    competition: number;
    executionComplexity: number;
  };
  score: number;
}

export interface TrafficAnalysisProps {
  search: {
    description: string;
    percentage: number;
  };
  direct: {
    description: string;
    percentage: number;
  };
  recommendation: string;
}

export interface AdBudgetProps {
  searchAds: {
    budget: string;
    focus: string;
  };
  socialMediaAds: {
    budget: string;
    focus: string;
  };
}

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

export type SampleData = {
  ideaAssessment: {
    businessExistence: {
      status: "unique_twist" | string;
      description: string;
    };
    competitorAnalysis: {
      keywordOpportunityInsights: {
        summary: string;
        recommendedKeywords: {
          name: string;
          competitionLevel: "Low" | "Medium" | "High" | string;
        }[];
        topKeywords: {
          name: string;
          volume: number;
          CPC: number;
          competitionLevel: "Low" | "Medium" | "High" | string;
        }[];
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
      currentCompetitors: {
        title: string;
        visits: number;
        marketShare: string;
      }[];
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
};
