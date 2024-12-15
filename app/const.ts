import { EnhancedSampleData } from "./types";

export const sampleData: EnhancedSampleData = {
  ideaAssessment: {
    businessExistence: {
      status: "unique_twist",
      description: "Market exists with opportunity for innovation"
    },
    competitorAnalysis: {
      keywordOpportunityInsights: {
        summary: "Strong growth potential in target keywords",
        recommendedKeywords: [
          { name: "saas metrics dashboard", competitionLevel: "Low" },
          { name: "startup analytics platform", competitionLevel: "Medium" },
          { name: "real-time business insights", competitionLevel: "Low" }
        ],
        topKeywords: [
          { name: "saas analytics", volume: 12000, CPC: 4.5, competitionLevel: "High" },
          { name: "business intelligence", volume: 33000, CPC: 6.2, competitionLevel: "High" },
          { name: "data visualization", volume: 27000, CPC: 5.8, competitionLevel: "Medium" }
        ],
        conclusion: "High-value keywords with moderate competition"
      },
      marketGapVisualization: {
        opportunities: ["Untapped SMB market", "Integration capabilities", "AI-powered insights"],
        threats: ["Enterprise competition", "Market saturation", "Price sensitivity"]
      }
    },
    trafficSourceOptimizationSuggestions: {
      competitorTrends: {
        search: {
          description: "Strong organic search presence",
          percentage: 20
        },
        direct: {
          description: "Growing brand recognition",
          percentage: 20
        },
        social:{
          description: "Growing brand recognition",
          percentage: 20,
        },
        referals:{
          description: "Growing brand recognition",
          percentage: 20,
        },
        mails:{
          description: "Growing brand recognition",
          percentage: 20,
        },
      },
      recommendation: "Focus on SEO and content marketing"
    },
    globalAndLocalCompetitorHeatmap: {
      dominantCountries: ["USA", "UK", "Canada", "Australia"],
      countryWiseDistribution: [
        {
          country: "USA",
          trafficShare: 45,
          competitors: ["Competitor A", "Competitor B", "Competitor C"]
        },
        {
          country: "UK",
          trafficShare: 25,
          competitors: ["Competitor B", "Competitor D"]
        },
        {
          country: "Canada",
          trafficShare: 15,
          competitors: ["Competitor A", "Competitor C"]
        },
        {
          country: "Australia",
          trafficShare: 15,
          competitors: ["Competitor B", "Competitor E"]
        }
      ],
      recommendation: "Focus on English-speaking markets initially"
    },
    estimatedMarketShareProjection: {
      currentCompetitors: [
        { title: "Market Leader", visits: 500000, marketShare: "35%" },
        { title: "Major Player", visits: 300000, marketShare: "25%" },
        { title: "Growing Competitor", visits: 200000, marketShare: "15%" }
      ],
      potentialShare: {
        description: "Potential to capture significant market share with unique features",
        range: {
          min: 10,
          max: 20
        }
      }
    },
    customSaaSPerformanceScore: {
      criteria: {
        uniqueness: 8,
        marketDemand: 7,
        competition: 6,
        executionComplexity: 7
      },
      score: 7.5
    },
    adBudgetRecommendations: {
      searchAds: {
        budget: "$3,000/month",
        focus: "High-intent keywords"
      },
      socialMediaAds: {
        budget: "$2,000/month",
        focus: "Brand awareness"
      }
    },
    marketSizeAnalysis: {
      totalMarketSize: 5000000000, // $5B
      monthlyActiveUsers: 2000000,
      growthTrend: {
        description: "Steady growth in SaaS adoption across industries",
        rate: 15.5 // 15.5% growth rate
      },
      recommendation: "Focus on rapid market penetration while the market is expanding"
    }
  }
};