'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getUsageStats, getAnalyticsSummary, exportAnalytics, resetAnalytics, type UsageStats } from "@/lib/analytics/usage-tracker";
import { BarChart3, Download, RotateCcw, TrendingUp, Users, FileText } from "lucide-react";

export function AnalyticsDashboard() {
  const [stats, setStats] = useState<UsageStats | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setStats(getUsageStats());
  }, []);

  const refreshStats = () => {
    setStats(getUsageStats());
  };

  const handleExport = () => {
    const data = exportAnalytics();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neurodiversity-screener-analytics.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) {
      resetAnalytics();
      refreshStats();
    }
  };

  const handleLogToConsole = () => {
    console.log(getAnalyticsSummary());
    alert('Analytics logged to console! Open browser dev tools to view.');
  };

  if (!isClient || !stats) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">Loading analytics...</div>
        </CardContent>
      </Card>
    );
  }

  const completionRates = {
    adhd: stats.adhdStarts > 0 ? ((stats.adhdCompletions / stats.adhdStarts) * 100).toFixed(1) : '0',
    autism: stats.autismStarts > 0 ? ((stats.autismCompletions / stats.autismStarts) * 100).toFixed(1) : '0'
  };

  const totalUsers = Math.max(stats.homePageVisits, stats.totalSessions);
  const totalCompletions = stats.adhdCompletions + stats.autismCompletions;
  const engagementRate = totalUsers > 0 ? ((totalCompletions / totalUsers) * 100).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">NeuroScreen Analytics</h2>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(stats.lastUpdated).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={refreshStats}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleLogToConsole}>
            <BarChart3 className="h-4 w-4 mr-2" />
            Log to Console
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          {process.env.NODE_ENV === 'development' && (
            <Button variant="destructive" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Unique visits to homepage
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSessions}</div>
            <p className="text-xs text-muted-foreground">
              App launches
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completions</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCompletions}</div>
            <p className="text-xs text-muted-foreground">
              Questionnaires finished
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{engagementRate}%</div>
            <p className="text-xs text-muted-foreground">
              Completion to visit ratio
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ADHD Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600 dark:text-orange-400">ADHD Screener</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Page Visits:</span>
                <span className="font-mono">{stats.adhdPageVisits}</span>
              </div>
              <div className="flex justify-between">
                <span>Questionnaire Starts:</span>
                <span className="font-mono">{stats.adhdStarts}</span>
              </div>
              <div className="flex justify-between">
                <span>Completions:</span>
                <span className="font-mono">{stats.adhdCompletions}</span>
              </div>
              <div className="flex justify-between">
                <span>PDF Downloads:</span>
                <span className="font-mono">{stats.adhdPdfDownloads}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Completion Rate:</span>
                <span className="font-mono">{completionRates.adhd}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Autism Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-blue-400">Autism Screener</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Page Visits:</span>
                <span className="font-mono">{stats.autismPageVisits}</span>
              </div>
              <div className="flex justify-between">
                <span>Questionnaire Starts:</span>
                <span className="font-mono">{stats.autismStarts}</span>
              </div>
              <div className="flex justify-between">
                <span>Completions:</span>
                <span className="font-mono">{stats.autismCompletions}</span>
              </div>
              <div className="flex justify-between">
                <span>PDF Downloads:</span>
                <span className="font-mono">{stats.autismPdfDownloads}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Completion Rate:</span>
                <span className="font-mono">{completionRates.autism}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            How to View Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><strong>Console:</strong> Click &quot;Log to Console&quot; then open browser dev tools (F12) to see formatted analytics</p>
          <p><strong>Export:</strong> Download analytics as JSON file for external analysis</p>
          <p><strong>Refresh:</strong> Updates stats from localStorage</p>
          {process.env.NODE_ENV === 'development' && (
            <p><strong>Reset:</strong> Clears all analytics data (only available in development)</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 