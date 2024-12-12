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
  similarSites:unknown; //done
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
