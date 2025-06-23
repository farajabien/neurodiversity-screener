'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Download, Home, AlertCircle, Brain } from "lucide-react";
import Link from "next/link";
import { calculateAutismScore } from "@/lib/scoring/autism-scoring";
import { AUTISM_THRESHOLD } from "@/lib/data/autism-questions";
import { ScoreDisplay } from "@/components/results/ScoreDisplay";
import { RecommendationCard } from "@/components/results/RecommendationCard";

interface AutismResults {
  totalScore: number;
  maxScore: number;
  aboveThreshold: boolean;
  riskLevel: 'low' | 'moderate' | 'high';
  interpretation: string;
  recommendations: string[];
  overallResult: 'positive' | 'negative';
}

export default function AutismResultsPage() {
  const [results, setResults] = useState<AutismResults | null>(null);
  const [responses, setResponses] = useState<Record<number, number> | null>(null);

  useEffect(() => {
    // Get responses from localStorage - check both possible storage keys
    let savedData = localStorage.getItem('autism-questionnaire_results');
    
    // Fallback to old format if new format doesn't exist
    if (!savedData) {
      savedData = localStorage.getItem('autism-questionnaire-responses');
    }
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        
        // Handle both new and old data formats
        let responsesArray;
        if (parsedData.responses) {
          // New format from useQuestionnaire hook
          responsesArray = parsedData.responses;
          setResponses(responsesArray);
        } else {
          // Old format - convert object to responses array
          const responsesObj = parsedData;
          setResponses(responsesObj);
          responsesArray = Object.entries(responsesObj).map(([questionIndex, responseIndex]) => ({
            questionId: `autism-${questionIndex}`,
            responseIndex: responseIndex as number
          }));
        }
        
        // Calculate scores
        const scoreResult = calculateAutismScore(responsesArray);
        setResults(scoreResult);
      } catch (error) {
        console.error('Error parsing saved responses:', error);
      }
    }
  }, []);

  if (!results || !responses) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 text-yellow-700 dark:text-yellow-300 mb-4">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">No Results Found</span>
                </div>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-6 leading-relaxed">
                  We couldn&apos;t find your questionnaire responses. Please complete the Autism screening first to view your results.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/autism/questionnaire">
                    Take Autism Screening
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
      title: "Autism Self Advocacy Network (ASAN)",
      description: "Advocacy organization run by and for autistic adults",
      url: "https://autisticadvocacy.org",
      type: 'community' as const
    },
    {
      title: "Autistic Women & Nonbinary Network",
      description: "Support and resources for autistic women and nonbinary individuals",
      url: "https://awnnetwork.org",
      type: 'community' as const
    },
    {
      title: "Find Autism Assessment Services",
      description: "Directory of professionals who provide autism assessments for adults",
      url: "https://www.autism.org.uk/directory",
      type: 'professional' as const
    },
    {
      title: "Autism Research Centre",
      description: "Research and resources from the creators of the AQ-10",
      url: "https://www.autismresearchcentre.com",
      type: 'educational' as const
    }
  ];

  const handleDownloadResults = () => {
    const resultsData = {
      testDate: new Date().toLocaleDateString(),
      screenerType: 'Autism (AQ-10)',
      score: `${results.totalScore}/${results.maxScore}`,
             threshold: AUTISM_THRESHOLD,
      riskLevel: results.riskLevel,
      interpretation: results.interpretation,
      recommendations: results.recommendations
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resultsData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `autism-screening-results-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <div className="container mobile-safe-padding py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Your Autism Screening Results
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Based on the Autism Spectrum Quotient (AQ-10)
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Score Display */}
            <div className="lg:col-span-2">
                             <ScoreDisplay
                 title="Autism Screening Score"
                 score={results.totalScore}
                 maxScore={results.maxScore}
                 threshold={AUTISM_THRESHOLD}
                 riskLevel={results.riskLevel}
                 interpretation={results.interpretation}
               />
            </div>

            {/* Recommendations */}
            <div className="lg:col-span-3">
              <RecommendationCard
                riskLevel={results.riskLevel}
                screenerType="autism"
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
              className="mobile-btn-large bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/autism/questionnaire">
                <RotateCcw className="h-5 w-5 mr-3" />
                Retake Autism Screening
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
                <Link href="/adhd">
                  <Brain className="h-4 w-4 mr-2" />
                  Try ADHD Screener
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