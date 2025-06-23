import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, Download, Home } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <AnalyticsProvider pageType="analytics">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-purple-900 dark:text-purple-100">
              Usage Analytics
            </h1>
            <p className="text-lg text-purple-700 dark:text-purple-300 max-w-2xl mx-auto leading-relaxed">
              Track how people are using the neurodiversity screening tools.
              <span className="block mt-2">All data is stored locally and anonymous.</span>
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-purple-600 dark:text-purple-400">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>User Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>Completion Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Download Tracking</span>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Big CTA Notice */}
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                  📊 Analytics Dashboard
                </h2>
                <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                  View comprehensive usage statistics for both ADHD and Autism screening tools. 
                  All analytics are stored locally in your browser for privacy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Component */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Usage Statistics
              </CardTitle>
              <CardDescription>
                Real-time analytics from local browser storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsDashboard />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild className="h-14 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/adhd">
                <BarChart3 className="h-5 w-5 mr-2" />
                ADHD Analytics
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 text-lg font-semibold">
              <Link href="/autism">
                <BarChart3 className="h-5 w-5 mr-2" />
                Autism Analytics
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 text-lg font-semibold">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Privacy Notice */}
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-green-800 dark:text-green-200">Privacy First</span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
              All analytics data is stored locally in your browser. No personal information is collected or transmitted. 
              This dashboard shows aggregate usage patterns to help improve the screening experience.
            </p>
          </div>
        </div>
      </div>
    </AnalyticsProvider>
  );
}