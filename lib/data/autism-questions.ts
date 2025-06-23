// Autism Spectrum Quotient (AQ-10) Questions
// Developed by Autism Research Centre, University of Cambridge

export interface AutismQuestion {
  id: string;
  text: string;
  options: string[];
  // Scoring pattern: which response indices count as 1 point toward autism
  scoringIndices: number[];
}

export const autismQuestions: AutismQuestion[] = [
  {
    id: 'aq1',
    text: 'I often notice small sounds when others do not.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [0, 1] // "Definitely agree" and "Slightly agree"
  },
  {
    id: 'aq2', 
    text: 'I usually concentrate more on the whole picture, rather than the small details.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq3',
    text: 'I find it easy to do more than one thing at once.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq4',
    text: 'If there is an interruption, I can switch back to what I was doing very quickly.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq5',
    text: 'I find it easy to \'read between the lines\' when someone is talking to me.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq6',
    text: 'I know how to tell if someone listening to me is getting bored.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq7',
    text: 'When I\'m reading a story, I find it difficult to work out the characters\' intentions.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [0, 1] // "Definitely agree" and "Slightly agree"
  },
  {
    id: 'aq8',
    text: 'I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant, etc.).',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [0, 1] // "Definitely agree" and "Slightly agree"
  },
  {
    id: 'aq9',
    text: 'I find it easy to work out what someone is thinking or feeling just by looking at their face.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [2, 3] // "Slightly disagree" and "Definitely disagree"
  },
  {
    id: 'aq10',
    text: 'I find it difficult to work out people\'s intentions.',
    options: ['Definitely agree', 'Slightly agree', 'Slightly disagree', 'Definitely disagree'],
    scoringIndices: [0, 1] // "Definitely agree" and "Slightly agree"
  }
];

// Thresholds
export const AUTISM_THRESHOLD = 6; // 6 or more points suggests autism assessment should be considered
export const TOTAL_QUESTIONS = autismQuestions.length;

// Helper functions
export const getQuestionByIndex = (index: number): AutismQuestion | null => {
  return autismQuestions[index] || null;
};

// Question indices that are "reverse scored" (disagree = autistic trait)
export const reverseScoreQuestions = [1, 2, 3, 4, 5, 8]; // Questions 2, 3, 4, 5, 6, 9 (0-indexed)

// Question indices that are "forward scored" (agree = autistic trait)  
export const forwardScoreQuestions = [0, 6, 7, 9]; // Questions 1, 7, 8, 10 (0-indexed) 