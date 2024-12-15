import React from 'react';
import { TrendingUp, Users, DollarSign, LineChart } from 'lucide-react';
import { AIIndicator } from './ui/AIIndicator';
import { MarketSizeAnalysis as MSP } from '@/app/types/market';
import { formatNumber, formatPercentage } from '@/app/utils/formatters';

export function MarketSizeAnalysis({ 
  totalMarketSize, 
  monthlyActiveUsers, 
  growthTrend, 
  recommendation 
}: MSP) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <LineChart className="w-4 h-4 text-violet-600" />
        <h2 className="text-base font-bold">Market Size Analysis</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
        <div className="bg-violet-50 rounded p-2">
          <div className="flex items-center gap-1 mb-1">
            <DollarSign className="w-3 h-3 text-violet-600" />
            <span className="text-xs font-bold text-violet-800">Total Market</span>
          </div>
          <AIIndicator>
            <p className="text-lg font-extrabold text-violet-700">{formatNumber(totalMarketSize)}</p>
          </AIIndicator>
        </div>

        <div className="bg-violet-50 rounded p-2">
          <div className="flex items-center gap-1 mb-1">
            <Users className="w-3 h-3 text-violet-600" />
            <span className="text-xs font-bold text-violet-800">Monthly Users</span>
          </div>
          <AIIndicator>
            <p className="text-lg font-extrabold text-violet-700">{formatNumber(monthlyActiveUsers)}</p>
          </AIIndicator>
        </div>

        <div className="bg-violet-50 rounded p-2">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-violet-600" />
            <span className="text-xs font-bold text-violet-800">Growth Rate</span>
          </div>
          <AIIndicator>
            <p className="text-lg font-extrabold text-violet-700">{formatPercentage(growthTrend.rate)}</p>
          </AIIndicator>
        </div>
      </div>

      <div className="bg-violet-50 rounded p-2 mt-2">
        <AIIndicator className="text-xs font-medium text-violet-900">
          {recommendation}
        </AIIndicator>
      </div>
    </div>
  );
}