import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Shield, FileText, CheckCircle, ExternalLink, Home } from "lucide-react";
import Link from "next/link";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

export default function AboutPage() {
  return (
    <AnalyticsProvider pageType="about">
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-blue-900 dark:text-blue-100">
              About NeuroScreen
            </h1>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto leading-relaxed">
              A simple web version of validated screening questionnaires.
              <span className="block mt-2">For those who prefer digital over PDFs.</span>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Why I Built This */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Why I Built This
                </h2>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  I made NeuroScreen because filling out PDF questionnaires can be tedious. 
                  This digital version uses the same validated questions (ASRS-v1.1 for ADHD, AQ-10 for Autism) 
                  but makes them easier to complete with one question at a time, auto-save, and instant results.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What It Does */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Same Questionnaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">ADHD: ASRS-v1.1</div>
                    <div className="text-sm text-muted-foreground">18 questions from WHO</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Autism: AQ-10</div>
                    <div className="text-sm text-muted-foreground">10 questions from Cambridge</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Same scoring</div>
                    <div className="text-sm text-muted-foreground">Identical to paper versions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Everything stays local</div>
                    <div className="text-sm text-muted-foreground">No data sent anywhere</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">No tracking</div>
                    <div className="text-sm text-muted-foreground">No cookies, no analytics</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Open source</div>
                    <div className="text-sm text-muted-foreground">Code is public on GitHub</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Original Questionnaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Original Questionnaires
              </CardTitle>
              <CardDescription>
                These are the official questionnaires I digitized
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400">ADHD Screener</h4>
                  <p className="text-sm text-muted-foreground">
                    Adult ADHD Self-Report Scale (ASRS-v1.1) developed with the World Health Organization
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/questionnaires/adhd-questionnaire-ASRS111.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Original PDF
                    </Link>
                  </Button>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Autism Screener</h4>
                  <p className="text-sm text-muted-foreground">
                    Autism Spectrum Quotient (AQ-10) by Cambridge Autism Research Centre
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/questionnaires/AQ-10_for_adults.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Original PDF
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle>How It&apos;s Built</CardTitle>
              <CardDescription>
                Simple tech stack for reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold">Next.js</div>
                  <div className="text-muted-foreground">React Framework</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">TypeScript</div>
                  <div className="text-muted-foreground">Type Safety</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Tailwind</div>
                  <div className="text-muted-foreground">Styling</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Vercel</div>
                  <div className="text-muted-foreground">Hosting</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild className="mobile-btn-large bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/adhd">
                <Brain className="h-5 w-5 mr-2" />
                Try ADHD Screener
              </Link>
            </Button>
            <Button asChild className="mobile-btn-large bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/autism">
                <Brain className="h-5 w-5 mr-2" />
                Try Autism Screener
              </Link>
            </Button>
            <Button asChild variant="outline" className="mobile-btn-large">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <div className="bg-muted/30 rounded-lg p-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Built by <strong>Faraja Bien</strong> • 
              <Link href="https://github.com/farajabien/neurodiversity-screener" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                View Source <ExternalLink className="h-3 w-3 inline ml-1" />
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">
              This is a screening tool, not a diagnostic instrument. Discuss results with healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </AnalyticsProvider>
  );
} 