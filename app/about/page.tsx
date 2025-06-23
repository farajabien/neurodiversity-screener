import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Shield, Users, CheckCircle, ExternalLink, Home } from "lucide-react";
import Link from "next/link";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

export default function AboutPage() {
  return (
    <AnalyticsProvider pageType="about">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              About NeuroScreen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A free, accessible, and privacy-first platform for neurodiversity self-assessment.
              <span className="block mt-2">Empowering self-knowledge through validated clinical tools.</span>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Mission Statement */}
          <Card className="border-2 border-gradient-to-r from-orange-200 to-blue-200 dark:from-orange-800 dark:to-blue-800 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-orange-950 dark:via-gray-950 dark:to-blue-950">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe everyone deserves accessible tools for self-understanding. NeuroScreen provides 
                  clinically validated ADHD and Autism screening tools in a neurodivergent-friendly, 
                  privacy-first environment that puts your needs first.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <Brain className="h-5 w-5" />
                  Neurodivergent-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">One question at a time</div>
                    <div className="text-sm text-muted-foreground">Reduces cognitive overload</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Clear visual hierarchy</div>
                    <div className="text-sm text-muted-foreground">Big CTA design, minimal distractions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Auto-save progress</div>
                    <div className="text-sm text-muted-foreground">Never lose your place</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">100% local storage</div>
                    <div className="text-sm text-muted-foreground">No data ever leaves your device</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">No tracking or cookies</div>
                    <div className="text-sm text-muted-foreground">Your privacy is guaranteed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Open source</div>
                    <div className="text-sm text-muted-foreground">Transparent and auditable</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Validation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Clinical Validation
              </CardTitle>
              <CardDescription>
                Built on scientifically validated screening tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400">ADHD Screener (ASRS-v1.1)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Developed with World Health Organization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Based on DSM-IV-TR criteria
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Validated across diverse populations
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Autism Screener (AQ-10)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cambridge Autism Research Centre
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Extensively peer-reviewed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Used globally in clinical settings
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Excellence</CardTitle>
              <CardDescription>
                Modern web technologies for optimal user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold">Next.js 15</div>
                  <div className="text-muted-foreground">React Framework</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">TypeScript</div>
                  <div className="text-muted-foreground">Type Safety</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">Tailwind CSS</div>
                  <div className="text-muted-foreground">Styling</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">WCAG 2.1 AA</div>
                  <div className="text-muted-foreground">Accessibility</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild className="h-14 text-lg font-semibold bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/adhd">
                <Brain className="h-5 w-5 mr-2" />
                Try ADHD Screener
              </Link>
            </Button>
            <Button asChild className="h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/autism">
                <Brain className="h-5 w-5 mr-2" />
                Try Autism Screener
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 text-lg font-semibold">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <div className="bg-muted/30 rounded-lg p-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Created with ❤️ by <strong>Faraja Bien</strong> • 
              <Link href="https://github.com/farajabien" className="text-primary hover:underline ml-1">
                @farajabien <ExternalLink className="h-3 w-3 inline ml-1" />
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">
              This is a screening tool, not a diagnostic instrument. Results should be discussed with healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </AnalyticsProvider>
  );
} 