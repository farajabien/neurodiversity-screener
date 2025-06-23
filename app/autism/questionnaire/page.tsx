'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowLeft } from "lucide-react";

import { QuestionCard } from "@/components/questionnaire/QuestionCard";
import { ProgressBar } from "@/components/questionnaire/ProgressBar";
import { NavigationButtons } from "@/components/questionnaire/NavigationButtons";
import { useQuestionnaire } from "@/hooks/useQuestionnaire";
import { useQuestionnaireTracking } from "@/hooks/useAnalytics";
import { autismQuestions } from "@/lib/data/autism-questions";
import { useEffect } from "react";

export default function AutismQuestionnairePage() {
  const questionnaire = useQuestionnaire({
    questions: autismQuestions,
    storageKey: 'autism-questionnaire',
    resultsPath: '/autism/results'
  });
  
  const { trackStart } = useQuestionnaireTracking('autism');
  
  // Track questionnaire start on first load
  useEffect(() => {
    if (questionnaire.isInitialized && questionnaire.currentQuestionIndex === 0) {
      trackStart();
    }
  }, [questionnaire.isInitialized, questionnaire.currentQuestionIndex, trackStart]);

  if (!questionnaire.isInitialized) {
    return (
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
        <div className="loading-container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-sm text-muted-foreground mt-2">Loading questionnaire...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = questionnaire.currentQuestion;
  if (!currentQuestionData) {
    return (
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
        <div className="loading-container">
          <div className="text-center">
            <p className="text-muted-foreground">Question not found.</p>
            <Button asChild className="mt-4 btn-stable">
              <Link href="/autism">Back to Autism Screener</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-3 min-h-[48px]">
          <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg flex-shrink-0">
            <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold">Autism Screener</h1>
        </div>
        
        {/* Progress Bar */}
        <ProgressBar 
          currentQuestion={questionnaire.currentQuestionIndex + 1}
          totalQuestions={questionnaire.totalQuestions}
        />
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestionData.text}
        options={currentQuestionData.options}
        value={questionnaire.currentResponse?.responseIndex.toString()}
        onChange={(value) => questionnaire.handleAnswer(parseInt(value))}
        questionNumber={questionnaire.currentQuestionIndex + 1}
        totalQuestions={questionnaire.totalQuestions}
      />

      {/* Navigation */}
      <div className="max-w-2xl mx-auto mt-6">
        <NavigationButtons
          currentQuestion={questionnaire.currentQuestionIndex + 1}
          totalQuestions={questionnaire.totalQuestions}
          canGoNext={questionnaire.canGoNext}
          canGoPrevious={questionnaire.canGoPrevious}
          onPrevious={questionnaire.goToPrevious}
          onNext={questionnaire.goToNext}
          onSubmit={questionnaire.submitQuestionnaire}
          isLoading={questionnaire.isLoading}
        />
      </div>

      {/* Back to Info Link */}
      <div className="text-center mt-8">
        <Button variant="ghost" asChild>
          <Link href="/autism">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Autism Info
          </Link>
        </Button>
      </div>

      {/* Progress Information */}
      <Card className="max-w-2xl mx-auto mt-8 bg-muted/30">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              📋 Your progress is automatically saved. You can close this page and return later.
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              AQ-10: Quick autism spectrum screening questionnaire
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 