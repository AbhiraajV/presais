import React from 'react';
import { BarChart3, Sparkles } from 'lucide-react';
import { CompetitionBadge } from './ui/CompetitionBadge';
import { KeywordOpportunityInsights } from '@/app/types/keywords';

export function KeywordAnalysis({ 
  summary, 
  recommendedKeywords, 
  topKeywords, 
  conclusion 
}: KeywordOpportunityInsights) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <BarChart3 className="w-4 h-4 text-blue-600" />
        <h2 className="text-base font-bold">Keyword Analysis</h2>
      </div>
      <p className="text-xs font-medium text-gray-600 mb-2">{summary}</p>
      
      <div className="grid grid-cols-1 gap-2 mb-2">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <h3 className="text-xs font-bold">Recommended Keywords</h3>
          </div>
          <div className="space-y-1">
            {recommendedKeywords.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between bg-blue-50 p-2 rounded">
                <span className="text-xs font-medium">{keyword.name}</span>
                <CompetitionBadge level={keyword.competitionLevel} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <h3 className="text-xs font-bold mb-1">Top Competitor Keywords</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-2 py-1 text-left text-xs font-bold">Keyword</th>
                <th className="px-2 py-1 text-right text-xs font-bold">Volume</th>
                <th className="px-2 py-1 text-right text-xs font-bold">CPC</th>
                <th className="px-2 py-1 text-right text-xs font-bold">Competition</th>
              </tr>
            </thead>
            <tbody>
              {topKeywords.map((keyword, index) => (
                <tr key={index} className="border-t">
                  <td className="px-2 py-1 text-xs font-medium">{keyword.name}</td>
                  <td className="px-2 py-1 text-xs text-right">{keyword.volume.toLocaleString()}</td>
                  <td className="px-2 py-1 text-xs text-right">${keyword.CPC.toFixed(2)}</td>
                  <td className="px-2 py-1 text-right">
                    <CompetitionBadge level={keyword.competitionLevel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="p-2 bg-blue-50 rounded text-xs font-medium text-blue-800">
        {conclusion}
      </div>
    </div>
  );
}