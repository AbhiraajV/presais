"use client";

import { Badge } from "@/components/ui/badge";
import { SiteData } from "@/types";
import { Globe, TrendingUp, Users } from "lucide-react";

interface SiteMetricsProps {
  globalRank: SiteData["GlobalRank"];
  categoryRank?: SiteData["CategoryRank"];
  category: string;
  totalVisits: number | null;
  countryRank: number | null;
  country: string;
}

    const formatNumber = (num: number) =>
                num >= 1e9 ? `${(num / 1e9).toFixed(0)}B` :
                num >= 1e6 ? `${(num / 1e6).toFixed(0)}M` :
                num >= 1e3 ? `${(num / 1e3).toFixed(0)}T` :
                num.toString();

export function SiteMetrics({
  globalRank,
  categoryRank,
  countryRank,
  country,
  category,
  totalVisits,
}: SiteMetricsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {globalRank && <Badge variant="secondary" className="flex items-center gap-1">
        <Globe className="h-4 w-4" />
        Global Rank #{globalRank?.Rank}
      </Badge>}
      {
        countryRank && 
        <Badge variant="secondary" className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          {countryRank} in {country}
        </Badge>
      }
      {totalVisits && (
        <Badge variant="secondary" className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          {formatNumber(totalVisits)} Monthly Visits
        </Badge>
      )}
      {categoryRank && (
        <Badge variant="secondary" className="flex items-center gap-1">
          <TrendingUp className="h-4 w-4" />
          {category} Rank #{categoryRank.Rank}
        </Badge>
      )}
    </div>
  );
}