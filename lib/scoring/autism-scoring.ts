import { autismQuestions, AUTISM_THRESHOLD } from '../data/autism-questions';

export interface AutismResponse {
  questionId: string;
  responseIndex: number;
}

export interface AutismScoreResult {
  totalScore: number;
  maxScore: number;
  aboveThreshold: boolean;
  overallResult: 'positive' | 'negative';
  interpretation: string;
  recommendations: string[];
  riskLevel: 'low' | 'moderate' | 'high';
}

/**
 * Calculate Autism screening score based on AQ-10 criteria
 */
export function calculateAutismScore(responses: AutismResponse[]): AutismScoreResult {
  let totalScore = 0;

  // Calculate total score
  responses.forEach(response => {
    const question = autismQuestions.find(q => q.id === response.questionId);
    if (!question) return;

    const isScoring = question.scoringIndices.includes(response.responseIndex);
    if (isScoring) {
      totalScore++;
    }
  });

  const aboveThreshold = totalScore >= AUTISM_THRESHOLD;
  const maxScore = autismQuestions.length;

  // Determine overall result and risk level
  let overallResult: 'positive' | 'negative';
  let riskLevel: 'low' | 'moderate' | 'high';
  
  if (aboveThreshold) {
    overallResult = 'positive';
    if (totalScore >= 8) {
      riskLevel = 'high';
    } else {
      riskLevel = 'moderate';
    }
  } else {
    overallResult = 'negative';
    if (totalScore >= 4) {
      riskLevel = 'moderate';
    } else {
      riskLevel = 'low';
    }
  }

  // Generate interpretation
  const interpretation = generateInterpretation(totalScore, aboveThreshold, riskLevel);
  
  // Generate recommendations
  const recommendations = generateRecommendations(overallResult, riskLevel);

  return {
    totalScore,
    maxScore,
    aboveThreshold,
    overallResult,
    interpretation,
    recommendations,
    riskLevel
  };
}

function generateInterpretation(
  totalScore: number, 
  aboveThreshold: boolean, 
  riskLevel: 'low' | 'moderate' | 'high'
): string {
  if (aboveThreshold) {
    if (riskLevel === 'high') {
      return `Your score of ${totalScore} out of 10 is significantly above the threshold for autism screening. This suggests that a comprehensive autism assessment should be strongly considered. Many autistic adults find that understanding their neurodivergence helps them better understand themselves and access appropriate support.`;
    } else {
      return `Your score of ${totalScore} out of 10 is above the threshold of 6, which suggests that an autism assessment should be considered. This screening tool indicates that you may have some traits commonly associated with autism spectrum conditions.`;
    }
  } else {
    if (riskLevel === 'moderate') {
      return `Your score of ${totalScore} out of 10 is below the screening threshold, but you do show some traits associated with autism. If you continue to have questions about autism or if these traits significantly impact your daily life, you may still wish to discuss this with a healthcare professional who specializes in autism.`;
    } else {
      return `Your score of ${totalScore} out of 10 suggests fewer traits typically associated with autism spectrum conditions. However, if you have ongoing concerns about autism or social communication challenges, you can still discuss these with a healthcare professional.`;
    }
  }
}

function generateRecommendations(
  result: 'positive' | 'negative', 
  riskLevel: 'low' | 'moderate' | 'high'
): string[] {
  const baseRecommendations = [
    "Remember that this is a screening tool, not a diagnostic assessment",
    "Only qualified professionals can conduct comprehensive autism evaluations",
    "Autism presents differently in different people, especially in adults"
  ];

  if (result === 'positive') {
    const specificRecommendations = [
      "Consider contacting an autism specialist or developmental psychologist",
      "Look for professionals who have experience with adult autism assessments",
      "Consider connecting with autistic communities and support groups",
      "Learn about autism in adults and self-advocacy resources"
    ];

    if (riskLevel === 'high') {
      return [
        "Strongly consider seeking a comprehensive autism assessment",
        ...specificRecommendations,
        "Explore autism-friendly strategies that might help in daily life",
        ...baseRecommendations
      ];
    } else {
      return [
        "Consider discussing autism assessment options with a healthcare provider",
        ...specificRecommendations,
        ...baseRecommendations
      ];
    }
  } else if (riskLevel === 'moderate') {
    return [
      "Consider speaking with a healthcare provider if social communication challenges affect your daily life",
      "You might benefit from learning about different neurodivergent traits and coping strategies",
      "Keep track of situations where you notice social or communication difficulties",
      ...baseRecommendations
    ];
  } else {
    return [
      "Continue to monitor your experiences if you have ongoing concerns",
      "Consider other factors that might affect social communication and daily functioning",
      "Speak with a healthcare provider if concerns persist or worsen",
      ...baseRecommendations
    ];
  }
}

/**
 * Get detailed breakdown of responses
 */
export function getDetailedBreakdown(responses: AutismResponse[]) {
  return autismQuestions.map((question, index) => {
    const response = responses.find(r => r.questionId === question.id);
    const isScoring = response ? question.scoringIndices.includes(response.responseIndex) : false;
    
    return {
      questionNumber: index + 1,
      question: question.text,
      response: response ? question.options[response.responseIndex] : 'Not answered',
      isScoring,
      scoringPattern: question.scoringIndices.map(i => question.options[i]).join(' or ')
    };
  });
}

/**
 * Get percentage score for display
 */
export function getPercentageScore(score: number): number {
  return Math.round((score / autismQuestions.length) * 100);
} 