'use client';

import { useEffect, useState } from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Download, Home, AlertCircle, Brain } from "lucide-react";
import Link from "next/link";
import { calculateADHDScore } from "@/lib/scoring/adhd-scoring";
import { ScoreDisplay } from "@/components/results/ScoreDisplay";
import { RecommendationCard } from "@/components/results/RecommendationCard";

interface ADHDResults {
  partAScore: number;
  partBScore: number;
  totalScore: number;
  riskLevel: 'low' | 'moderate' | 'high';
  interpretation: string;
  recommendations: string[];
  partAPositive: boolean;
  overallResult: 'positive' | 'negative';
}

export default function ADHDResultsPage() {
  const [results, setResults] = useState<ADHDResults | null>(null);
  const [responses, setResponses] = useState<Record<number, number> | null>(null);

  useEffect(() => {
    // Get responses from localStorage
    const savedResponses = localStorage.getItem('adhd-questionnaire-responses');
    if (savedResponses) {
      const parsedResponses = JSON.parse(savedResponses);
      setResponses(parsedResponses);
      
      // Convert responses to the expected format
      const formattedResponses = Object.entries(parsedResponses).map(([questionIndex, responseIndex]) => ({
        questionId: `adhd-${questionIndex}`,
        responseIndex: responseIndex as number
      }));
      
      // Calculate scores
      const scoreResult = calculateADHDScore(formattedResponses);
      setResults(scoreResult);
    }
  }, []);

  if (!results || !responses) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 text-yellow-700 dark:text-yellow-300 mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">No Results Found</span>
                </div>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-6 leading-relaxed">
                  We couldn&apos;t find your questionnaire responses. Please complete the ADHD screening first to view your results.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/adhd/questionnaire">
                    Take ADHD Screening
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const resources = [
    {
      title: "CHADD (Children and Adults with ADHD)",
      description: "National resource for evidence-based information and support for ADHD",
      url: "https://chadd.org",
      type: 'educational' as const
    },
    {
      title: "ADDitude Magazine",
      description: "Practical strategies, expert advice, and community support for ADHD",
      url: "https://additudemag.com",
      type: 'educational' as const
    },
    {
      title: "Find an ADHD Professional",
      description: "Directory of healthcare providers specializing in ADHD assessment and treatment",
      url: "https://chadd.org/professional-directory",
      type: 'professional' as const
    },
    {
      title: "ADHD Support Groups",
      description: "Connect with others who understand your experience",
      url: "https://chadd.org/support",
      type: 'community' as const
    }
  ];

  const handleDownloadResults = () => {
    const resultsData = {
      testDate: new Date().toLocaleDateString(),
      screenerType: 'ADHD (ASRS-v1.1)',
      scores: {
        partA: `${results.partAScore}/6`,
        partB: `${results.partBScore}/12`,
        total: `${results.totalScore}/18`
      },
      riskLevel: results.riskLevel,
      interpretation: results.interpretation,
      recommendations: results.recommendations
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resultsData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `adhd-screening-results-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Your ADHD Screening Results
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Based on the Adult ADHD Self-Report Scale (ASRS-v1.1)
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Score Display */}
            <div className="lg:col-span-2">
              <ScoreDisplay
                title="ADHD Screening Score"
                score={results.totalScore}
                maxScore={18}
                threshold={4}
                riskLevel={results.riskLevel}
                interpretation={results.interpretation}
                breakdown={[
                  {
                    label: "Part A (Most Predictive)",
                    score: results.partAScore,
                    maxScore: 6
                  },
                  {
                    label: "Part B (Additional Symptoms)",
                    score: results.partBScore,
                    maxScore: 12
                  }
                ]}
              />
            </div>

            {/* Recommendations */}
            <div className="lg:col-span-3">
              <RecommendationCard
                riskLevel={results.riskLevel}
                screenerType="adhd"
                recommendations={results.recommendations}
                resources={resources}
                nextSteps={results.recommendations}
              />
            </div>
          </div>

          {/* Action Buttons - Big CTA Style */}
          <div className="max-w-2xl mx-auto space-y-4">
            {/* Primary Action */}
            <Button 
              asChild 
              size="lg" 
              className="w-full h-14 text-lg font-semibold bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/adhd/questionnaire">
                <RotateCcw className="h-5 w-5 mr-3" />
                Retake ADHD Screening
              </Link>
            </Button>
            
            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-12 font-medium"
                onClick={handleDownloadResults}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Results
              </Button>
              <Button variant="outline" asChild className="h-12 font-medium">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Additional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Button variant="outline" asChild className="h-12 font-medium">
                <Link href="/autism">
                  <Brain className="h-4 w-4 mr-2" />
                  Try Autism Screener
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-12 font-medium">
                <Link href="/analytics">
                  📊 Analytics Dashboard
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-12 font-medium">
                <Link href="/about">
                  ℹ️ About NeuroScreen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 