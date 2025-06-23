'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export interface QuestionnaireResponse {
  questionId: string;
  responseIndex: number;
}

interface UseQuestionnaireProps {
  questions: Array<{ id: string; text: string; options: string[] }>;
  storageKey: string;
  resultsPath: string;
}

export function useQuestionnaire({ 
  questions, 
  storageKey, 
  resultsPath 
}: UseQuestionnaireProps) {
  const router = useRouter();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuestionnaireResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      try {
        const { responses: savedResponses, currentQuestion } = JSON.parse(savedData);
        setResponses(savedResponses || []);
        setCurrentQuestionIndex(currentQuestion || 0);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
    setIsInitialized(true);
  }, [storageKey]);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (isInitialized) {
      const dataToSave = {
        responses,
        currentQuestion: currentQuestionIndex,
        timestamp: Date.now()
      };
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    }
  }, [responses, currentQuestionIndex, storageKey, isInitialized]);

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];
  
  // Get current response for the question
  const currentResponse = responses.find(
    r => r.questionId === currentQuestion?.id
  );

  // Navigation state
  const canGoPrevious = currentQuestionIndex > 0;
  const canGoNext = currentResponse !== undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const totalQuestions = questions.length;

  // Handle answer selection
  const handleAnswer = useCallback((responseIndex: number) => {
    const questionId = currentQuestion.id;
    
    setResponses(prev => {
      const newResponses = prev.filter(r => r.questionId !== questionId);
      return [...newResponses, { questionId, responseIndex }];
    });
  }, [currentQuestion]);

  // Navigate to previous question
  const goToPrevious = useCallback(() => {
    if (canGoPrevious) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [canGoPrevious]);

  // Navigate to next question
  const goToNext = useCallback(() => {
    if (canGoNext && !isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [canGoNext, isLastQuestion]);

  // Submit questionnaire
  const submitQuestionnaire = useCallback(async () => {
    if (!canGoNext) return;

    setIsLoading(true);
    
    try {
      // Save final results to localStorage
      const finalResults = {
        responses,
        completedAt: Date.now(),
        questionnaireType: storageKey
      };
      
      localStorage.setItem(`${storageKey}_results`, JSON.stringify(finalResults));
      
      // Track completion
      const { trackUsage } = await import('@/lib/analytics/usage-tracker');
      if (storageKey.includes('adhd')) {
        trackUsage.adhdQuestionnaireCompleted();
      } else {
        trackUsage.autismQuestionnaireCompleted();
      }
      
      // Small delay for UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Navigate to results page
      router.push(resultsPath);
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      setIsLoading(false);
    }
  }, [canGoNext, responses, storageKey, resultsPath, router]);

  // Clear progress (for retaking)
  const clearProgress = useCallback(() => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}_results`);
    setResponses([]);
    setCurrentQuestionIndex(0);
  }, [storageKey]);

  // Calculate progress percentage
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return {
    // State
    currentQuestion,
    currentQuestionIndex,
    currentResponse,
    responses,
    isLoading,
    isInitialized,
    
    // Navigation
    canGoPrevious,
    canGoNext,
    isLastQuestion,
    totalQuestions,
    progressPercentage,
    
    // Actions
    handleAnswer,
    goToPrevious,
    goToNext,
    submitQuestionnaire,
    clearProgress
  };
} 