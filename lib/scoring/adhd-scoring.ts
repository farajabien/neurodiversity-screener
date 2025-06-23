import { adhdQuestions, partAQuestions, partBQuestions, ADHD_PART_A_THRESHOLD } from '../data/adhd-questions';

export interface ADHDResponse {
  questionId: string;
  responseIndex: number;
}

export interface ADHDScoreResult {
  partAScore: number;
  partBScore: number;
  totalScore: number;
  partAPositive: boolean;
  overallResult: 'positive' | 'negative';
  interpretation: string;
  recommendations: string[];
  riskLevel: 'low' | 'moderate' | 'high';
}

/**
 * Calculate ADHD screening score based on ASRS-v1.1 criteria
 */
export function calculateADHDScore(responses: ADHDResponse[]): ADHDScoreResult {
  let partAScore = 0;
  let partBScore = 0;

  // Calculate Part A score (most important for screening)
  responses.forEach(response => {
    const question = adhdQuestions.find(q => q.id === response.questionId);
    if (!question) return;

    const isScoring = question.scoringIndices.includes(response.responseIndex);
    
    if (question.part === 'A' && isScoring) {
      partAScore++;
    } else if (question.part === 'B' && isScoring) {
      partBScore++;
    }
  });

  const partAPositive = partAScore >= ADHD_PART_A_THRESHOLD;
  const totalScore = partAScore + partBScore;

  // Determine overall result and risk level
  let overallResult: 'positive' | 'negative';
  let riskLevel: 'low' | 'moderate' | 'high';
  
  if (partAPositive) {
    overallResult = 'positive';
    if (partAScore >= 5 && partBScore >= 8) {
      riskLevel = 'high';
    } else if (partAScore >= 5 || partBScore >= 6) {
      riskLevel = 'moderate';
    } else {
      riskLevel = 'moderate';
    }
  } else {
    overallResult = 'negative';
    if (partAScore >= 2 || partBScore >= 6) {
      riskLevel = 'moderate';
    } else {
      riskLevel = 'low';
    }
  }

  // Generate interpretation
  const interpretation = generateInterpretation(partAScore, partBScore, partAPositive, riskLevel);
  
  // Generate recommendations
  const recommendations = generateRecommendations(overallResult, riskLevel);

  return {
    partAScore,
    partBScore,
    totalScore,
    partAPositive,
    overallResult,
    interpretation,
    recommendations,
    riskLevel
  };
}

function generateInterpretation(
  partAScore: number, 
  partBScore: number, 
  partAPositive: boolean, 
  riskLevel: 'low' | 'moderate' | 'high'
): string {
  if (partAPositive) {
    return `Your responses suggest symptoms highly consistent with ADHD in adults. You scored ${partAScore} out of 6 on the most predictive questions (Part A), which meets the threshold for further evaluation. The additional symptoms in Part B (${partBScore} out of 12) provide further insight into your experiences.`;
  } else {
    if (riskLevel === 'moderate') {
      return `While you didn't meet the threshold on the most predictive questions (Part A: ${partAScore}/6), you did report some ADHD-related symptoms (Part B: ${partBScore}/12). Consider discussing these experiences with a healthcare provider if they impact your daily life.`;
    } else {
      return `Your responses suggest fewer symptoms consistent with ADHD. You scored ${partAScore} out of 6 on Part A and ${partBScore} out of 12 on Part B. If you continue to have concerns about attention or hyperactivity, consider speaking with a healthcare provider.`;
    }
  }
}

function generateRecommendations(
  result: 'positive' | 'negative', 
  riskLevel: 'low' | 'moderate' | 'high'
): string[] {
  const baseRecommendations = [
    "Remember that this is a screening tool, not a diagnostic test",
    "Only a qualified healthcare professional can provide an ADHD diagnosis"
  ];

  if (result === 'positive') {
    return [
      "Consider scheduling an appointment with your primary care physician or a mental health professional",
      "Bring these results and the official ASRS-v1.1 questionnaire to your appointment",
      "Keep a symptom diary noting when ADHD symptoms affect your daily activities",
      "Consider asking about comprehensive ADHD assessment options",
      ...baseRecommendations
    ];
  } else if (riskLevel === 'moderate') {
    return [
      "Consider discussing your concerns with a healthcare provider if symptoms affect your daily life",
      "Keep track of situations where you notice attention or concentration difficulties",
      "Consider lifestyle factors that might affect focus (sleep, stress, diet)",
      ...baseRecommendations
    ];
  } else {
    return [
      "Continue monitoring your symptoms if you have ongoing concerns",
      "Consider other factors that might affect attention and concentration",
      "Speak with a healthcare provider if symptoms worsen or interfere with daily activities",
      ...baseRecommendations
    ];
  }
}

/**
 * Get detailed breakdown of responses by part
 */
export function getDetailedBreakdown(responses: ADHDResponse[]) {
  const partABreakdown = partAQuestions.map(question => {
    const response = responses.find(r => r.questionId === question.id);
    const isScoring = response ? question.scoringIndices.includes(response.responseIndex) : false;
    
    return {
      question: question.text,
      response: response ? question.options[response.responseIndex] : 'Not answered',
      isScoring
    };
  });

  const partBBreakdown = partBQuestions.map(question => {
    const response = responses.find(r => r.questionId === question.id);
    const isScoring = response ? question.scoringIndices.includes(response.responseIndex) : false;
    
    return {
      question: question.text,
      response: response ? question.options[response.responseIndex] : 'Not answered',
      isScoring
    };
  });

  return { partABreakdown, partBBreakdown };
} 