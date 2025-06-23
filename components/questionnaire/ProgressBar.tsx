'use client';

import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
}

export function ProgressBar({ 
  currentQuestion, 
  totalQuestions, 
  className = "" 
}: ProgressBarProps) {
  const percentage = Math.round(((currentQuestion) / totalQuestions) * 100);
  
  return (
    <div className={`space-y-2 ${className}`}>
      <Progress value={percentage} className="w-full h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{percentage}% complete</span>
      </div>
    </div>
  );
} 