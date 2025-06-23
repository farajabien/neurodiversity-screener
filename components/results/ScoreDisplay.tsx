'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

interface ScoreDisplayProps {
  title: string;
  score: number;
  maxScore: number;
  threshold: number;
  riskLevel: 'low' | 'moderate' | 'high';
  interpretation: string;
  breakdown?: {
    label: string;
    score: number;
    maxScore: number;
  }[];
  className?: string;
}

const riskConfig = {
  low: {
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: CheckCircle,
    progressColor: 'bg-green-500'
  },
  moderate: {
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    icon: AlertCircle,
    progressColor: 'bg-yellow-500'
  },
  high: {
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    icon: AlertTriangle,
    progressColor: 'bg-red-500'
  }
};

export function ScoreDisplay({
  title,
  score,
  maxScore,
  threshold,
  riskLevel,
  interpretation,
  breakdown,
  className = ""
}: ScoreDisplayProps) {
  const config = riskConfig[riskLevel];
  const Icon = config.icon;
  const percentage = Math.round((score / maxScore) * 100);
  const thresholdPercentage = Math.round((threshold / maxScore) * 100);

  return (
    <Card className={`${config.borderColor} ${className}`}>
      <CardHeader className={`${config.bgColor} rounded-t-lg`}>
        <CardTitle className={`${config.color} flex items-center gap-2`}>
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {/* Main Score Display */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="text-4xl font-bold">
              {score}
              <span className="text-lg text-muted-foreground font-normal">/{maxScore}</span>
            </div>
            <div className={`text-sm font-medium ${config.color}`}>
              {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk Level
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="relative">
              <Progress value={percentage} className="h-3" />
              <div 
                className="absolute top-0 left-0 h-3 w-1 bg-gray-400 opacity-60"
                style={{ left: `${thresholdPercentage}%` }}
                title={`Threshold: ${threshold}`}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span className="flex flex-col items-center">
                <span>Threshold</span>
                <span className="font-medium">{threshold}</span>
              </span>
              <span>{maxScore}</span>
            </div>
          </div>
        </div>

        {/* Score Breakdown */}
        {breakdown && breakdown.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Score Breakdown</h4>
            <div className="space-y-2">
              {breakdown.map((item, index) => {
                const itemPercentage = Math.round((item.score / item.maxScore) * 100);
                return (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="font-medium">
                        {item.score}/{item.maxScore}
                      </span>
                    </div>
                    <Progress value={itemPercentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Clinical Interpretation */}
        <div className={`p-4 rounded-lg ${config.bgColor} border ${config.borderColor}`}>
          <h4 className={`font-semibold text-sm mb-2 ${config.color}`}>
            Clinical Interpretation
          </h4>
          <p className="text-sm leading-relaxed">
            {interpretation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 