import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { LanguageCode } from "@/types/learning";

interface LanguageState {
  selectedLanguageCode: LanguageCode | null;
  setSelectedLanguageCode: (code: LanguageCode) => void;
  clearSelectedLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageCode: null,
      setSelectedLanguageCode: (code) => set({ selectedLanguageCode: code }),
      clearSelectedLanguage: () => set({ selectedLanguageCode: null }),
    }),
    {
      name: "language-selection",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
