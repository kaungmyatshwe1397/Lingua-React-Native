import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { TodayPlanItem } from "@/types/learning";

interface ProgressState {
  dailyXP: number;
  dailyGoal: number;
  streak: number;
  completedLessonIds: string[];
  todayPlan: TodayPlanItem[];
  currentLessonId: string | null;

  // Actions
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  setCurrentLesson: (lessonId: string | null) => void;
  togglePlanItem: (itemId: string) => void;
  incrementStreak: () => void;
  resetDailyProgress: () => void;
}

const DEFAULT_TODAY_PLAN: TodayPlanItem[] = [
  {
    id: "plan-1",
    type: "lesson",
    title: "Lesson",
    subtitle: "At the café",
    completed: true,
  },
  {
    id: "plan-2",
    type: "conversation",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    completed: false,
  },
  {
    id: "plan-3",
    type: "words",
    title: "New words",
    subtitle: "10 words",
    completed: false,
  },
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      dailyXP: 15,
      dailyGoal: 20,
      streak: 12,
      completedLessonIds: [],
      todayPlan: DEFAULT_TODAY_PLAN,
      currentLessonId: "es-lesson-2",

      addXP: (amount) =>
        set((state) => ({
          dailyXP: Math.min(state.dailyXP + amount, state.dailyGoal),
        })),

      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessonIds: [...state.completedLessonIds, lessonId],
        })),

      setCurrentLesson: (lessonId) =>
        set({ currentLessonId: lessonId }),

      togglePlanItem: (itemId) =>
        set((state) => ({
          todayPlan: state.todayPlan.map((item) =>
            item.id === itemId ? { ...item, completed: !item.completed } : item
          ),
        })),

      incrementStreak: () =>
        set((state) => ({ streak: state.streak + 1 })),

      resetDailyProgress: () =>
        set({ dailyXP: 0, todayPlan: DEFAULT_TODAY_PLAN }),
    }),
    {
      name: "user-progress",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
