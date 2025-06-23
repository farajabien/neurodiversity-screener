'use client';

import { useEffect } from 'react';
import { trackUsage } from '@/lib/analytics/usage-tracker';

/**
 * Hook to automatically track page visits
 */
export function usePageTracking(pageType: 'home' | 'adhd' | 'autism' | 'analytics' | 'about') {
  useEffect(() => {
    // Track page visit
    switch (pageType) {
      case 'home':
        trackUsage.homePageVisited();
        break;
      case 'adhd':
        trackUsage.adhdPageVisited();
        break;
      case 'autism':
        trackUsage.autismPageVisited();
        break;
      case 'analytics': 
        trackUsage.analyticsPageVisited();
        break;
      case 'about':
        trackUsage.aboutPageVisited();
        break;
    }
  }, [pageType]);
}

/**
 * Hook to track questionnaire lifecycle
 */
export function useQuestionnaireTracking(questionnaireType: 'adhd' | 'autism') {
  const trackStart = () => {
    if (questionnaireType === 'adhd') {
      trackUsage.adhdQuestionnaireStarted();
    } else {
      trackUsage.autismQuestionnaireStarted();
    }
  };

  const trackCompletion = () => {
    if (questionnaireType === 'adhd') {
      trackUsage.adhdQuestionnaireCompleted();
    } else {
      trackUsage.autismQuestionnaireCompleted();
    }
  };

  return { trackStart, trackCompletion };
}

/**
 * Hook to track PDF downloads
 */
export function usePdfTracking() {
  const trackAdhdPdfDownload = () => {
    trackUsage.adhdPdfDownloaded();
  };

  const trackAutismPdfDownload = () => {
    trackUsage.autismPdfDownloaded();
  };

  return { trackAdhdPdfDownload, trackAutismPdfDownload };
}

/**
 * Hook to track sessions (call once per app load)
 */
export function useSessionTracking() {
  useEffect(() => {
    trackUsage.sessionStarted();
  }, []);
} 