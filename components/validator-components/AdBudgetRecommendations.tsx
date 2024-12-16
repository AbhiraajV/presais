import React from 'react';
import { DollarSign } from 'lucide-react';
import { AdBudgetRecommendations as ABR} from '@/app/types/advertising';

export function AdBudgetRecommendations({ searchAds, socialMediaAds }: ABR) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <DollarSign className="w-4 h-4 text-emerald-600" />
        <h2 className="text-base font-bold">Ad Budget</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-emerald-50 rounded p-2">
          <h3 className="text-sm font-bold mb-1">Search Ads</h3>
          <div className="space-y-1">
            <div>
              <p className="text-sm font-bold text-emerald-800">Budget</p>
              <p className="text-base font-extrabold text-emerald-700">{searchAds.budget}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-800">Focus</p>
              <p className="text-sm font-bold text-emerald-900">{searchAds.focus}</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded p-2">
          <h3 className="text-sm font-bold mb-1">Social Media</h3>
          <div className="space-y-1">
            <div>
              <p className="text-sm font-bold text-emerald-800">Budget</p>
              <p className="text-base font-extrabold text-emerald-700">{socialMediaAds.budget}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-800">Focus</p>
              <p className="text-sm font-bold text-emerald-900">{socialMediaAds.focus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}