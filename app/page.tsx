import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

export default function HomePage() {
  return (
    <AnalyticsProvider pageType="home">
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
      {/* Hero Section - Simplified */}
      <div className="text-center space-y-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Understand Yourself
            <span className="block text-primary mt-2">Start Here</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free, private neurodiversity screening tools. 
            <span className="block mt-2">Take the first step toward understanding your brain.</span>
          </p>
        </div>

        {/* Key Benefits - Simplified */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium ">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span>5-10 minutes</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span>Clinically validated</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span>Instant results</span>
          </div>
        </div>
      </div>

      {/* Primary Choice - Big CTAs */}
      <div className="space-y-10 max-w-2xl mx-auto mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Choose Your Screening</h2>
          <p className="text-muted-foreground">Both are quick, private, and clinically validated</p>
        </div>

        {/* ADHD Big CTA */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-200 hover:shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">ADHD Screening</h3>
                <p className="text-orange-700 dark:text-orange-300 font-medium">Attention & Focus Assessment</p>
              </div>
              <p className="text-orange-800 dark:text-orange-200">
                Do you have trouble focusing, staying organized, or sitting still? 
                This 8-minute screening can help you understand ADHD symptoms.
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-orange-700 dark:text-orange-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>18 questions</span>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="mobile-btn-large text-white bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/adhd">
                Start ADHD Screening
                <ArrowRight className="h-5 w-5 ml-2 flex-shrink-0" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Autism Big CTA */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 hover:shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Autism Screening</h3>
                <p className="text-blue-700 dark:text-blue-300 font-medium">Social & Communication Assessment</p>
              </div>
              <p className="text-blue-800 dark:text-blue-200">
                Do you notice differences in how you communicate or experience the world? 
                This 5-minute screening explores autism spectrum traits.
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-blue-700 dark:text-blue-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>10 questions</span>
              </div>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="mobile-btn-large text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/autism">
                Start Autism Screening
                <ArrowRight className="h-5 w-5 ml-2 flex-shrink-0" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Trust & Disclaimer - Simplified */}
      <div className="max-w-2xl mx-auto mt-20 space-y-10">
        {/* Quick Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">Clinically Validated</div>
              <div className="text-xs text-muted-foreground">WHO & Cambridge research</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">100% Private</div>
              <div className="text-xs text-muted-foreground">Data stays on your device</div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid-stable sm:grid-cols-2 gap-4">
          <Link 
            href="/analytics" 
            className="group bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-center hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950 rounded-full flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                <span className="text-purple-600 dark:text-purple-400">📊</span>
              </div>
              <span className="font-semibold text-purple-800 dark:text-purple-200">Analytics Dashboard</span>
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              View usage statistics and engagement insights
            </p>
          </Link>

          <Link 
            href="/about" 
            className="group bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                <span className="text-blue-600 dark:text-blue-400">ℹ️</span>
              </div>
              <span className="font-semibold text-blue-800 dark:text-blue-200">About NeuroScreen</span>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Learn about our mission and clinical validation
            </p>
          </Link>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <span className="font-semibold text-amber-800 dark:text-amber-200">Important</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
            These are <strong>screening tools</strong>, not diagnostic tests. 
            Results can guide conversations with healthcare professionals about comprehensive assessment.
          </p>
        </div>
      </div>
    </div>
    </AnalyticsProvider>
  );
}
