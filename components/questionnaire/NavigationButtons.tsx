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
        className="btn-stable min-w-[120px] font-medium"
      >
        <ArrowLeft className="h-4 w-4 mr-2 flex-shrink-0" />
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Back</span>
      </Button>
      
      {isLastQuestion ? (
        <Button 
          onClick={onSubmit}
          disabled={!canGoNext || isLoading}
          size="lg"
          className="mobile-btn-large min-w-[160px] font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 flex-shrink-0"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="hidden sm:inline">See My Results</span>
              <span className="sm:hidden">Results</span>
            </>
          )}
        </Button>
      ) : (
        <Button 
          onClick={onNext}
          disabled={!canGoNext || isLoading}
          size="lg"
          className="mobile-btn min-w-[120px] sm:min-w-[160px] font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          <span className="hidden sm:inline">Next Question</span>
          <span className="sm:hidden">Next</span>
          <ArrowRight className="h-4 w-4 ml-2 flex-shrink-0" />
        </Button>
      )}
    </div>
  );
} 