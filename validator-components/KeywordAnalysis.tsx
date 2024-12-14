import React from 'react';
import { BarChart3, Sparkles } from 'lucide-react';
import { KeywordAnalysisProps } from '../types';

const CompetitionBadge = ({ level }: { level: string }) => {
  const colors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[level as keyof typeof colors]}`}>
      {level}
    </span>
  );
};

export function KeywordAnalysis({ summary, recommendedKeywords, topKeywords, conclusion }: KeywordAnalysisProps) {
  return (
    <div className="bg-white w-full rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold">Keyword Analysis</h2>
      </div>
      <p className="text-sm font-medium text-gray-600 mb-3">{summary}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold">Recommended Keywords</h3>
          </div>
          <div className="space-y-2">
            {recommendedKeywords.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between bg-blue-50 p-2 rounded">
                <span className="text-sm font-medium">{keyword.name}</span>
                <CompetitionBadge level={keyword.competitionLevel} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <h3 className="text-sm font-bold mb-2">Top Competitor Keywords</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-2 text-left text-xs font-bold">Keyword</th>
                <th className="px-3 py-2 text-right text-xs font-bold">Volume</th>
                <th className="px-3 py-2 text-right text-xs font-bold">CPC</th>
                <th className="px-3 py-2 text-right text-xs font-bold">Competition</th>
              </tr>
            </thead>
            <tbody>
              {topKeywords.map((keyword, index) => (
                <tr key={index} className="border-t">
                  <td className="px-3 py-1.5 text-sm font-medium">{keyword.name}</td>
                  <td className="px-3 py-1.5 text-sm text-right">{keyword.volume.toLocaleString()}</td>
                  <td className="px-3 py-1.5 text-sm text-right">${keyword.CPC.toFixed(2)}</td>
                  <td className="px-3 py-1.5 text-right">
                    <CompetitionBadge level={keyword.competitionLevel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="p-2 bg-blue-50 rounded text-sm font-medium text-blue-800">
        {conclusion}
      </div>
    </div>
  );
}