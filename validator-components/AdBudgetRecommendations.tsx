import React from 'react';
import { DollarSign } from 'lucide-react';
import { AdBudgetProps } from '../types';

export function AdBudgetRecommendations({ searchAds, socialMediaAds }: AdBudgetProps) {
  return (
    <div className="bg-white w-full md:w-[38.5%] rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <DollarSign className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg font-bold">Ad Budget</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 rounded p-3">
          <h3 className="text-sm font-bold mb-2">Search Ads</h3>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-bold text-emerald-800">Budget</p>
              <p className="text-lg font-extrabold text-emerald-700">{searchAds.budget}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-800">Focus</p>
              <p className="text-xs font-medium text-emerald-900">{searchAds.focus}</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded p-3">
          <h3 className="text-sm font-bold mb-2">Social Media</h3>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-bold text-emerald-800">Budget</p>
              <p className="text-lg font-extrabold text-emerald-700">{socialMediaAds.budget}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-800">Focus</p>
              <p className="text-xs font-medium text-emerald-900">{socialMediaAds.focus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}