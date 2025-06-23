'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export function NavigationButtons({
  currentQuestion,
  totalQuestions,
  canGoNext,
  canGoPrevious,
  onPrevious,
  onNext,
  onSubmit,
  isLoading = false
}: NavigationButtonsProps) {
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <div className="flex justify-between items-center pt-6 gap-4">
      <Button 
        variant="outline" 
        onClick={onPrevious}
        disabled={!canGoPrevious || isLoading}
        className="min-w-[120px] h-12 font-medium"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      
      {isLastQuestion ? (
        <Button 
          onClick={onSubmit}
          disabled={!canGoNext || isLoading}
          size="lg"
          className="min-w-[160px] h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </>
          ) : (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              See My Results
            </>
          )}
        </Button>
      ) : (
        <Button 
          onClick={onNext}
          disabled={!canGoNext || isLoading}
          size="lg"
          className="min-w-[160px] h-12 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          Next Question
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
} 