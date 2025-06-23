/**
 * Simple client-side usage tracking
 * Tracks counts locally and provides methods to view/export analytics
 */

export interface UsageStats {
  // Questionnaire completions
  adhdCompletions: number;
  autismCompletions: number;
  
  // Questionnaire starts
  adhdStarts: number;
  autismStarts: number;
  
  // PDF downloads
  adhdPdfDownloads: number;
  autismPdfDownloads: number;
  
  // Page visits
  homePageVisits: number;
  adhdPageVisits: number;
  autismPageVisits: number;
  analyticsPageVisits: number;
  aboutPageVisits: number;
  // Additional metrics
  totalSessions: number;
  lastUpdated: number;
}

const STORAGE_KEY = 'neurodiversity-screener-analytics';

// Initialize default stats
const defaultStats: UsageStats = {
  adhdCompletions: 0,
  autismCompletions: 0,
  adhdStarts: 0,
  autismStarts: 0,
  adhdPdfDownloads: 0,
  autismPdfDownloads: 0,
  homePageVisits: 0,
  adhdPageVisits: 0,
  autismPageVisits: 0,
  analyticsPageVisits: 0,
  aboutPageVisits: 0,
  totalSessions: 0,
  lastUpdated: Date.now()
};

/**
 * Get current usage statistics
 */
export function getUsageStats(): UsageStats {
  if (typeof window === 'undefined') return defaultStats;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultStats, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error reading usage stats:', error);
  }
  
  return defaultStats;
}

/**
 * Save usage statistics to localStorage
 */
function saveUsageStats(stats: UsageStats): void {
  if (typeof window === 'undefined') return;
  
  try {
    const updatedStats = { ...stats, lastUpdated: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));
  } catch (error) {
    console.error('Error saving usage stats:', error);
  }
}

/**
 * Increment a specific counter
 */
function incrementCounter(counterName: keyof UsageStats): void {
  const stats = getUsageStats();
  if (typeof stats[counterName] === 'number') {
    (stats[counterName] as number)++;
    saveUsageStats(stats);
  }
}

// Public tracking functions
export const trackUsage = {
  // Questionnaire events
  adhdQuestionnaireStarted: () => incrementCounter('adhdStarts'),
  adhdQuestionnaireCompleted: () => incrementCounter('adhdCompletions'),
  autismQuestionnaireStarted: () => incrementCounter('autismStarts'),
  autismQuestionnaireCompleted: () => incrementCounter('autismCompletions'),
  
  // PDF downloads
  adhdPdfDownloaded: () => incrementCounter('adhdPdfDownloads'),
  autismPdfDownloaded: () => incrementCounter('autismPdfDownloads'),
  
  // Page visits
  homePageVisited: () => incrementCounter('homePageVisits'),
  adhdPageVisited: () => incrementCounter('adhdPageVisits'),
  autismPageVisited: () => incrementCounter('autismPageVisits'),
  analyticsPageVisited: () => incrementCounter('analyticsPageVisits'),
  aboutPageVisited: () => incrementCounter('aboutPageVisits'),
  // Session tracking
  sessionStarted: () => incrementCounter('totalSessions'),
};

/**
 * Get formatted analytics summary
 */
export function getAnalyticsSummary(): string {
  const stats = getUsageStats();
  
  const completionRates = {
    adhd: stats.adhdStarts > 0 ? ((stats.adhdCompletions / stats.adhdStarts) * 100).toFixed(1) : '0',
    autism: stats.autismStarts > 0 ? ((stats.autismCompletions / stats.autismStarts) * 100).toFixed(1) : '0'
  };
  
  return `
=== NeuroScreen Usage Analytics ===

📊 QUESTIONNAIRE METRICS:
• ADHD: ${stats.adhdStarts} starts → ${stats.adhdCompletions} completions (${completionRates.adhd}%)
• Autism: ${stats.autismStarts} starts → ${stats.autismCompletions} completions (${completionRates.autism}%)

📱 PAGE VISITS:
• Homepage: ${stats.homePageVisits} visits
• ADHD Info: ${stats.adhdPageVisits} visits  
• Autism Info: ${stats.autismPageVisits} visits

📄 PDF DOWNLOADS:
• ADHD PDF: ${stats.adhdPdfDownloads} downloads
• Autism PDF: ${stats.autismPdfDownloads} downloads

🔄 SESSIONS:
• Total Sessions: ${stats.totalSessions}
• Last Updated: ${new Date(stats.lastUpdated).toLocaleDateString()}

💡 INSIGHTS:
• Total Users: ~${Math.max(stats.homePageVisits, stats.totalSessions)}
• Most Popular: ${stats.adhdStarts > stats.autismStarts ? 'ADHD' : 'Autism'} screener
• Engagement Rate: ${((stats.adhdCompletions + stats.autismCompletions) / Math.max(1, stats.homePageVisits) * 100).toFixed(1)}%
  `.trim();
}

/**
 * Export analytics data as JSON
 */
export function exportAnalytics(): string {
  const stats = getUsageStats();
  return JSON.stringify(stats, null, 2);
}

/**
 * Reset all analytics (useful for testing)
 */
export function resetAnalytics(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Console helper to view analytics
 */
export function logAnalytics(): void {
  console.log(getAnalyticsSummary());
} 