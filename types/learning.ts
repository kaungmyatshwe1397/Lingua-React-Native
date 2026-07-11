// ─── Language ───────────────────────────────────────────────

export type LanguageCode =
  | "en"
  | "ja"
  | "ko"
  | "zh"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "th";

export type LanguageDifficulty = "beginner" | "intermediate" | "advanced";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  difficulty: LanguageDifficulty;
  /** total number of units available */
  totalUnits: number;
  /** display string for learner count, e.g. "28.4M learners" */
  learnerCount: string;
}

// ─── Unit ───────────────────────────────────────────────────

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  /** position within the language (1-based) */
  order: number;
  title: string;
  /** short description shown on the unit card */
  description: string;
  /** color theme for the unit card */
  color: string;
  /** lesson IDs that belong to this unit */
  lessonIds: string[];
}

// ─── Lesson ─────────────────────────────────────────────────

export type ActivityType =
  | "vocabulary"
  | "phrase"
  | "listening"
  | "speaking"
  | "matching"
  | "quiz";

export interface Lesson {
  id: string;
  unitId: string;
  languageCode: LanguageCode;
  /** position within the unit (1-based) */
  order: number;
  title: string;
  /** XP earned on completion */
  xpReward: number;
  /** estimated duration in seconds */
  estimatedDuration: number;
  /** ordered list of activities in this lesson */
  activities: Activity[];
  /** goals the learner will achieve */
  goals: LessonGoal[];
  /** AI teacher prompt for audio/video lesson (future Vision Agent) */
  aiTeacherPrompt?: AITeacherPrompt;
}

// ─── Activity ───────────────────────────────────────────────

export interface Activity {
  id: string;
  type: ActivityType;
  /** instruction shown to the learner */
  instruction: string;
  /** for vocabulary activities */
  vocabulary?: Vocabulary[];
  /** for phrase activities */
  phrases?: Phrase[];
  /** for matching activities */
  matchingPairs?: MatchingPair[];
  /** for quiz activities */
  quiz?: QuizQuestion;
}

// ─── Vocabulary ─────────────────────────────────────────────

export interface Vocabulary {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  /** example sentence in the target language */
  exampleSentence: string;
  /** translation of the example sentence */
  exampleTranslation: string;
  /** optional audio file path */
  audioUri?: string;
}

// ─── Phrase ─────────────────────────────────────────────────

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  pronunciation: string;
  /** context where this phrase is used */
  context: string;
}

// ─── Matching Pair ──────────────────────────────────────────

export interface MatchingPair {
  id: string;
  source: string; // word/phrase in the target language
  target: string; // translation in the learner's language
}

// ─── Quiz ───────────────────────────────────────────────────

export interface QuizQuestion {
  question: string;
  options: string[];
  /** index of the correct option */
  correctIndex: number;
  explanation: string;
}

// ─── Lesson Goal ────────────────────────────────────────────

export interface LessonGoal {
  description: string;
  /** e.g. "Learn 5 new words" */
  target: number;
  /** e.g. "words" */
  unit: string;
}

// ─── AI Teacher Prompt (Future Vision Agent) ────────────────

export interface AITeacherPrompt {
  /** system prompt for the AI teacher avatar */
  systemPrompt: string;
  /** topics the teacher should cover */
  topics: string[];
  /** expected interaction duration in seconds */
  targetDuration: number;
  /** teaching style: casual, formal, playful */
  style: "casual" | "formal" | "playful";
}
