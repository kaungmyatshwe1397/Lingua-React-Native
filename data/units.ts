import { Unit } from "@/types/learning";
import { colors } from "@/constants/theme";

export const units: Unit[] = [
  // ─── Japanese ──────────────────────────────────────────────
  {
    id: "ja-unit-1",
    languageCode: "ja",
    order: 1,
    title: "Greetings",
    description: "Learn basic Japanese greetings and introductions",
    color: colors.unit.pink,
    lessonIds: [
      "ja-lesson-1",
      "ja-lesson-2",
      "ja-lesson-3",
      "ja-lesson-4",
      "ja-lesson-5",
      "ja-lesson-6",
    ],
  },
  {
    id: "ja-unit-2",
    languageCode: "ja",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 and use numbers in daily life",
    color: colors.unit.orange,
    lessonIds: ["ja-lesson-7"],
  },

  // ─── Korean ────────────────────────────────────────────────
  {
    id: "ko-unit-1",
    languageCode: "ko",
    order: 1,
    title: "Greetings",
    description: "Learn basic Korean greetings and polite expressions",
    color: colors.unit.blue,
    lessonIds: [
      "ko-lesson-1",
      "ko-lesson-2",
      "ko-lesson-3",
      "ko-lesson-4",
      "ko-lesson-5",
      "ko-lesson-6",
    ],
  },
  {
    id: "ko-unit-2",
    languageCode: "ko",
    order: 2,
    title: "Numbers & Counting",
    description: "Learn the native Korean number system",
    color: colors.unit.purple,
    lessonIds: ["ko-lesson-7"],
  },

  // ─── Spanish ───────────────────────────────────────────────
  {
    id: "es-unit-1",
    languageCode: "es",
    order: 1,
    title: "Greetings",
    description: "Say hello and introduce yourself in Spanish",
    color: colors.unit.amber,
    lessonIds: [
      "es-lesson-1",
      "es-lesson-2",
      "es-lesson-3",
      "es-lesson-4",
      "es-lesson-5",
      "es-lesson-6",
    ],
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    order: 2,
    title: "Colors",
    description: "Learn the colors in Spanish",
    color: colors.unit.cobalt,
    lessonIds: ["es-lesson-7"],
  },

  // ─── French ────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    languageCode: "fr",
    order: 1,
    title: "Greetings",
    description: "Learn basic French greetings",
    color: colors.unit.pink,
    lessonIds: [
      "fr-lesson-1",
      "fr-lesson-2",
      "fr-lesson-3",
      "fr-lesson-4",
      "fr-lesson-5",
      "fr-lesson-6",
    ],
  },
  {
    id: "fr-unit-2",
    languageCode: "fr",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in French",
    color: colors.unit.purple,
    lessonIds: ["fr-lesson-7"],
  },

  // ─── Chinese ───────────────────────────────────────────────
  {
    id: "zh-unit-1",
    languageCode: "zh",
    order: 1,
    title: "Greetings",
    description: "Learn basic Mandarin greetings",
    color: colors.unit.pink,
    lessonIds: [
      "zh-lesson-1",
      "zh-lesson-2",
      "zh-lesson-3",
      "zh-lesson-4",
      "zh-lesson-5",
      "zh-lesson-6",
    ],
  },
  {
    id: "zh-unit-2",
    languageCode: "zh",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in Mandarin",
    color: colors.unit.amber,
    lessonIds: ["zh-lesson-7"],
  },

  // ─── German ────────────────────────────────────────────────
  {
    id: "de-unit-1",
    languageCode: "de",
    order: 1,
    title: "Greetings",
    description: "Learn basic German greetings and introductions",
    color: colors.unit.amber,
    lessonIds: [
      "de-lesson-1",
      "de-lesson-2",
      "de-lesson-3",
      "de-lesson-4",
      "de-lesson-5",
      "de-lesson-6",
    ],
  },
  {
    id: "de-unit-2",
    languageCode: "de",
    order: 2,
    title: "Numbers & Counting",
    description: "Count from 1 to 10 in German",
    color: colors.unit.blue,
    lessonIds: ["de-lesson-7"],
  },
];

export const getUnitsByLanguage = (languageCode: string): Unit[] =>
  units
    .filter((unit) => unit.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getUnitById = (id: string): Unit | undefined =>
  units.find((unit) => unit.id === id);
