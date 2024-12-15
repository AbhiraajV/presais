import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIIndicatorProps {
  children: React.ReactNode;
  className?: string;
}

export function AIIndicator({ children, className = '' }: AIIndicatorProps) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {children}
      <Sparkles className="w-3 h-3 text-blue-500" />
    </span>
  );
}