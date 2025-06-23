'use client';

import { usePageTracking, useSessionTracking } from "@/hooks/useAnalytics";

interface AnalyticsProviderProps {
  pageType: 'home' | 'adhd' | 'autism' | 'analytics' | 'about';
  children: React.ReactNode;
}

export function AnalyticsProvider({ pageType, children }: AnalyticsProviderProps) {
  usePageTracking(pageType);
  useSessionTracking();
  
  return <>{children}</>;
} 