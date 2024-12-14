import React from 'react';
import { TrendingUp } from 'lucide-react';
import { TrafficAnalysisProps } from '../types';

export function TrafficAnalysis({ search, direct, recommendation }: TrafficAnalysisProps) {
  return (
    <div className="bg-white w-full md:w-[60%] rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-bold">Traffic Sources</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Search Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{search.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-indigo-600 h-1.5 rounded-full"
                style={{ width: `${search.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{search.description}</p>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Direct Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{direct.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-indigo-600 h-1.5 rounded-full"
                style={{ width: `${direct.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{direct.description}</p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded p-3">
          <h3 className="text-sm font-bold mb-2">Strategy</h3>
          <p className="text-xs font-medium text-indigo-900">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}