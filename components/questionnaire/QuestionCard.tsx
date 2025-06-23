'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  question: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  questionNumber: number;
  totalQuestions: number;
  part?: 'A' | 'B'; // For ADHD questionnaire
  className?: string;
}

export function QuestionCard({
  question,
  options,
  value,
  onChange,
  questionNumber,
  totalQuestions,
  part,
  className = ""
}: QuestionCardProps) {
  return (
    <Card className={`max-w-2xl mx-auto card-stable ${className}`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground min-h-[24px]">
          <span className="flex-1">Question {questionNumber} of {totalQuestions}</span>
          {part && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium flex-shrink-0 ml-2">
              Part {part}
            </span>
          )}
        </div>
        <CardTitle className="text-lg leading-relaxed min-h-[28px]">
          {question}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <RadioGroup 
          value={value || ""} 
          onValueChange={onChange} 
          className="space-y-4"
        >
          {options.map((option, index) => (
            <div key={index} className="flex items-start space-x-4">
              <RadioGroupItem 
                value={index.toString()} 
                id={`option-${index}`}
                className="shrink-0 mt-3"
              />
              <Label 
                htmlFor={`option-${index}`} 
                className="text-sm cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors touch-target flex items-center font-medium leading-relaxed"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
} 