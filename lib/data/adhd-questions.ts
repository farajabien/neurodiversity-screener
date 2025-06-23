// ADHD Self-Report Scale (ASRS-v1.1) Questions
// Based on DSM-IV-TR criteria, developed with WHO

export interface ADHDQuestion {
  id: string;
  text: string;
  part: 'A' | 'B';
  options: string[];
  // For Part A questions, these are the "darkly shaded" response indices that count toward screening
  scoringIndices: number[];
}

export const adhdQuestions: ADHDQuestion[] = [
  // PART A - Most predictive questions (6 questions)
  {
    id: 'q1',
    text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    part: 'A',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q2', 
    text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    part: 'A',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q3',
    text: 'How often do you have problems remembering appointments or obligations?',
    part: 'A', 
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q4',
    text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    part: 'A',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q5',
    text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    part: 'A',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q6',
    text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    part: 'A',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [4] // Only "Very Often"
  },

  // PART B - Additional questions (12 questions)
  {
    id: 'q7',
    text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q8',
    text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q9',
    text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [2, 3, 4] // "Sometimes", "Often" and "Very Often"
  },
  {
    id: 'q10',
    text: 'How often do you misplace or have difficulty finding things at home or at work?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q11',
    text: 'How often are you distracted by activity or noise around you?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [2, 3, 4] // "Sometimes", "Often" and "Very Often"
  },
  {
    id: 'q12',
    text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [2, 3, 4] // "Sometimes", "Often" and "Very Often"
  },
  {
    id: 'q13',
    text: 'How often do you feel restless or fidgety?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q14',
    text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q15',
    text: 'How often do you find yourself talking too much when you are in social situations?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q16',
    text: 'When you\'re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [2, 3, 4] // "Sometimes", "Often" and "Very Often"
  },
  {
    id: 'q17',
    text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [3, 4] // "Often" and "Very Often"
  },
  {
    id: 'q18',
    text: 'How often do you interrupt others when they are busy?',
    part: 'B',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
    scoringIndices: [2, 3, 4] // "Sometimes", "Often" and "Very Often"
  }
];

// Question groups for easier access
export const partAQuestions = adhdQuestions.filter(q => q.part === 'A');
export const partBQuestions = adhdQuestions.filter(q => q.part === 'B');

// Thresholds
export const ADHD_PART_A_THRESHOLD = 4; // 4 or more scoring responses in Part A
export const TOTAL_QUESTIONS = adhdQuestions.length;

// Helper function to get question by index
export const getQuestionByIndex = (index: number): ADHDQuestion | null => {
  return adhdQuestions[index] || null;
};

// Helper function to check if we're in Part A
export const isPartA = (questionIndex: number): boolean => {
  return questionIndex < 6; // First 6 questions are Part A
}; 