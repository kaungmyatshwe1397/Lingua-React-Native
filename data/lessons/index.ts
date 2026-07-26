import { Lesson } from "@/types/learning";

import { japaneseLessons } from "./ja";
import { koreanLessons } from "./ko";
import { spanishLessons } from "./es";
import { frenchLessons } from "./fr";
import { chineseLessons } from "./zh";
import { germanLessons } from "./de";

export const lessons: Lesson[] = [
  ...japaneseLessons,
  ...koreanLessons,
  ...spanishLessons,
  ...frenchLessons,
  ...chineseLessons,
  ...germanLessons,
];

export const getLessonsByUnit = (unitId: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);

export const getLessonsByLanguage = (languageCode: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find((lesson) => lesson.id === id);
