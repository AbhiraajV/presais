import React from 'react';
import { TrendingUp } from 'lucide-react';
import { TrafficTrend } from '@/app/types/traffic';

export function TrafficAnalysis({ search, direct,social,mail,referals, recommendation }: {search?:TrafficTrend,direct?:TrafficTrend,social?:TrafficTrend,mail?:TrafficTrend,referals?:TrafficTrend,recommendation:string}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-4 h-4 text-indigo-600" />
        <h2 className="text-base font-bold">Traffic Sources</h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div className="space-y-2">
         {search && <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Search Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{search.percentage}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-1">
              <div
                className="bg-indigo-600 h-1 rounded-full"
                style={{ width: `${search.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{search.description}</p>
          </div>}
         {social && <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Social Media Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{social.percentage}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-1">
              <div
                className="bg-indigo-600 h-1 rounded-full"
                style={{ width: `${social.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{social.description}</p>
          </div>}
         {mail && <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Traffic from Mail</span>
              <span className="text-xs font-bold text-indigo-600">{mail.percentage}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-1">
              <div
                className="bg-indigo-600 h-1 rounded-full"
                style={{ width: `${mail.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{mail.description}</p>
          </div>}
         {referals && <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Referal Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{referals.percentage}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-1">
              <div
                className="bg-indigo-600 h-1 rounded-full"
                style={{ width: `${referals.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{referals.description}</p>
          </div>}

          {direct && <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold">Direct Traffic</span>
              <span className="text-xs font-bold text-indigo-600">{direct.percentage}%</span>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-1">
              <div
                className="bg-indigo-600 h-1 rounded-full"
                style={{ width: `${direct.percentage}%` }}
              ></div>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-600">{direct.description}</p>
          </div>}
        </div>

        <div className="bg-indigo-50 rounded p-2">
          <p className="text-xs font-medium text-indigo-900">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}