import { AlertCircle, CheckCircle2,  Sparkles } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ValidationItem {
  type: 'positive' | 'negative';
  action: string;
  statement: string;
}

interface ValidationStatusProps {
  status: string;
  description: ValidationItem[];
}

export function ValidationStatus({ status, description }: ValidationStatusProps) {
  return (
    <Card className="w-full mb-2 max-h-[500px] overflow-y-auto">
      <CardHeader>
        <div className="flex flex-col items-start justify-start gap-1">
          <CardTitle className="text-md font-extrabold flex gap-1">
            <Sparkles color='blue'/>
            <span>

            AI Market Entry Strategy
            </span>
            
            </CardTitle>
          <Badge
            variant="outline"
            className={cn(
              'px-4 py-1 text-sm font-medium','border-yellow-500 text-yellow-500'
            )}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-6">
        {description.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex gap-4 p-4 w-[330px] rounded-lg border transition-colors',
              item.type === 'positive'
                ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900'
                : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
            )}
          >
            <div className="flex-shrink-0 mt-1">
              {item.type === 'positive' ? (
                <CheckCircle2
                  className="w-5 h-5 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
              )}
            </div>
            <div className="flex-1 space-y-2">
              <h3
                className={cn(
                  'font-medium',
                  item.type === 'positive'
                    ? 'text-green-900 dark:text-green-100'
                    : 'text-red-900 dark:text-red-100'
                )}
              >
                {item.action}
              </h3>
              <p
                className={cn(
                  'text-sm',
                  item.type === 'positive'
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                )}
              >
                {item.statement}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}