import { Unit } from "@/types/learning";

export const units: Unit[] = [
  // ─── Japanese ──────────────────────────────────────────────
  {
    id: "ja-unit-1",
    languageCode: "ja",
    order: 1,
    title: "Greetings",
    description: "Learn basic Japanese greetings and introductions",
    color: "#FF4B6E",
    lessonIds: ["ja-lesson-1", "ja-lesson-2"],
  },
  {
    id: "ja-unit-2",
    languageCode: "ja",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 and use numbers in daily life",
    color: "#FF8B00",
    lessonIds: ["ja-lesson-3"],
  },

  // ─── Korean ────────────────────────────────────────────────
  {
    id: "ko-unit-1",
    languageCode: "ko",
    order: 1,
    title: "Greetings",
    description: "Learn basic Korean greetings and polite expressions",
    color: "#1CB0F6",
    lessonIds: ["ko-lesson-1"],
  },
  {
    id: "ko-unit-2",
    languageCode: "ko",
    order: 2,
    title: "Numbers & Counting",
    description: "Learn the native Korean number system",
    color: "#CE82FF",
    lessonIds: ["ko-lesson-2"],
  },

  // ─── Spanish ───────────────────────────────────────────────
  {
    id: "es-unit-1",
    languageCode: "es",
    order: 1,
    title: "Greetings",
    description: "Say hello and introduce yourself in Spanish",
    color: "#FF9600",
    lessonIds: ["es-lesson-1"],
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    order: 2,
    title: "Colors",
    description: "Learn the colors in Spanish",
    color: "#2B70C9",
    lessonIds: ["es-lesson-2"],
  },

  // ─── French ────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    languageCode: "fr",
    order: 1,
    title: "Greetings",
    description: "Learn basic French greetings",
    color: "#FF4B6E",
    lessonIds: ["fr-lesson-1"],
  },
  {
    id: "fr-unit-2",
    languageCode: "fr",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in French",
    color: "#CE82FF",
    lessonIds: ["fr-lesson-2"],
  },

  // ─── Chinese ───────────────────────────────────────────────
  {
    id: "zh-unit-1",
    languageCode: "zh",
    order: 1,
    title: "Greetings",
    description: "Learn basic Mandarin greetings",
    color: "#FF4B6E",
    lessonIds: ["zh-lesson-1"],
  },
  {
    id: "zh-unit-2",
    languageCode: "zh",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in Mandarin",
    color: "#FF9600",
    lessonIds: ["zh-lesson-2"],
  },

  // ─── German ────────────────────────────────────────────────
  {
    id: "de-unit-1",
    languageCode: "de",
    order: 1,
    title: "Greetings",
    description: "Learn basic German greetings and introductions",
    color: "#FF9600",
    lessonIds: ["de-lesson-1"],
  },
  {
    id: "de-unit-2",
    languageCode: "de",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in German",
    color: "#1CB0F6",
    lessonIds: ["de-lesson-2"],
  },
];

export const getUnitsByLanguage = (languageCode: string): Unit[] =>
  units
    .filter((unit) => unit.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getUnitById = (id: string): Unit | undefined =>
  units.find((unit) => unit.id === id);
