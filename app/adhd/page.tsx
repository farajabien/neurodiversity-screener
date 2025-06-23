import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, FileText, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { PdfDownloadButton } from "@/components/analytics/PdfDownloadButton";

export default function ADHDScreenerPage() {
  return (
    <AnalyticsProvider pageType="adhd">
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
      {/* Header Section - Simplified */}
      <div className="text-center space-y-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="mx-auto w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-orange-900 dark:text-orange-100">
            ADHD Screening
          </h1>
          <p className="text-lg text-orange-700 dark:text-orange-300 max-w-2xl mx-auto leading-relaxed">
            Do you have trouble with focus, organization, or sitting still? 
            <span className="block mt-2">This 8-minute screening can provide valuable insights.</span>
          </p>
        </div>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-orange-600 dark:text-orange-400">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>8 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span>18 questions</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>WHO validated</span>
          </div>
        </div>
      </div>

      {/* Big CTA Section */}
      <div className="max-w-2xl mx-auto mt-20 space-y-10">
        {/* Primary CTA */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
          <CardContent className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                Ready to Start?
              </h2>
              <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
                Think about your experiences over the past 6 months. The questions cover focus, 
                organization, hyperactivity, and impulsivity — core areas of ADHD.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">6</div>
                <div className="text-xs text-orange-700 dark:text-orange-300">Part A Questions</div>
                <div className="text-xs text-orange-600 dark:text-orange-400">Most predictive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">12</div>
                <div className="text-xs text-orange-700 dark:text-orange-300">Part B Questions</div>
                <div className="text-xs text-orange-600 dark:text-orange-400">Additional symptoms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</div>
                <div className="text-xs text-orange-700 dark:text-orange-300">Minutes Left</div>
                <div className="text-xs text-orange-600 dark:text-orange-400">Instant results</div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="mobile-btn-large bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/adhd/questionnaire">
                Begin ADHD Screening
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-center mb-4">What to Expect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-950 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">1</span>
                </div>
                <div>
                  <div className="font-medium text-sm">One question at a time</div>
                  <div className="text-xs text-muted-foreground">Clear focus, no overwhelm</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-950 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">2</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Rate frequency of experiences</div>
                  <div className="text-xs text-muted-foreground">Never, rarely, sometimes, often, very often</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-950 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">3</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Get your results instantly</div>
                  <div className="text-xs text-muted-foreground">Immediate interpretation and next steps</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

                 {/* Secondary Actions */}
         <div className="grid grid-cols-2 gap-4">
           <PdfDownloadButton 
             href="/questionnaires/adhd-questionnaire-ASRS111.pdf"
             type="adhd"
             className="h-12"
           />
           <Button variant="outline" asChild className="btn-stable">
             <Link href="/">
               ← Back to Home
             </Link>
           </Button>
         </div>

         {/* Quick Links */}
         <div className="grid grid-cols-2 gap-4 pt-4">
           <Link 
             href="/analytics" 
             className="text-center p-3 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors"
           >
             <div className="text-sm font-medium text-purple-700 dark:text-purple-300">📊 Analytics</div>
             <div className="text-xs text-muted-foreground">Usage insights</div>
           </Link>
           <Link 
             href="/about" 
             className="text-center p-3 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
           >
             <div className="text-sm font-medium text-blue-700 dark:text-blue-300">ℹ️ About</div>
             <div className="text-xs text-muted-foreground">Learn more</div>
           </Link>
         </div>

         {/* Important Notice */}
         <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 text-center">
           <div className="flex items-center justify-center gap-2 mb-3">
             <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
             <span className="font-semibold text-amber-800 dark:text-amber-200">Screening Tool</span>
           </div>
           <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
             This ASRS-v1.1 is a <strong>screening tool</strong>, not a diagnostic test. 
             Results can help guide conversations with healthcare professionals about comprehensive assessment.
           </p>
         </div>
       </div>
     </div>
    </AnalyticsProvider>
  );
}
 