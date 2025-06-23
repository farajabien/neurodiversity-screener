'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, UserCheck, AlertCircle, Heart } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'professional' | 'community' | 'educational' | 'assessment';
}

interface RecommendationCardProps {
  riskLevel: 'low' | 'moderate' | 'high';
  screenerType: 'adhd' | 'autism';
  recommendations: string[];
  resources: Resource[];
  nextSteps: string[];
  className?: string;
}

export function RecommendationCard({
  riskLevel,
  screenerType,
  recommendations,
  resources,
  nextSteps,
  className = ""
}: RecommendationCardProps) {
  const isHighRisk = riskLevel === 'high';
  const isAutism = screenerType === 'autism';

  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'professional':
        return UserCheck;
      case 'community':
        return Heart;
      case 'educational':
        return FileText;
      case 'assessment':
        return AlertCircle;
      default:
        return ExternalLink;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Professional Consultation Notice */}
      {isHighRisk && (
        <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-300 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Consider Professional Evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-600 dark:text-orange-400 leading-relaxed">
              Your screening results suggest it may be beneficial to speak with a qualified healthcare 
              professional for a comprehensive evaluation. They can provide personalized guidance and 
              discuss potential next steps.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Personalized Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Suggested Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            {nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Helpful Resources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {resources.map((resource, index) => {
              const Icon = getResourceIcon(resource.type);
              return (
                <div key={index} className="border rounded-lg p-4 space-y-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <h4 className="font-medium text-sm">{resource.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Visit Resource
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium text-sm">Important Disclaimer</span>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
              <p>
                This screening tool is for informational purposes only and cannot replace a professional 
                diagnosis. The results are based on your self-reported responses and should not be 
                considered as medical advice.
              </p>
              <p>
                {isAutism ? (
                  <>
                    If you&apos;re considering an autism assessment, know that autism is a neurotype with many 
                    strengths. Many autistic individuals lead fulfilling lives and contribute meaningfully 
                    to their communities.
                  </>
                ) : (
                  <>
                    ADHD is a common neurodevelopmental condition that affects many successful individuals. 
                    With proper support and strategies, people with ADHD can thrive in all areas of life.
                  </>
                )}
              </p>
              <p>
                Always consult with qualified healthcare professionals for comprehensive evaluation 
                and personalized guidance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 