import { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "jp",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "12.7M learners",
  },
  {
    code: "kr",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w320/kr.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "9.3M learners",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "28.4M learners",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "19.4M learners",
  },
  {
    code: "cn",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w320/cn.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "7.4M learners",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    difficulty: "beginner",
    totalUnits: 2,
    learnerCount: "8.1M learners",
  },
];

export const getLanguageByCode = (code: string): Language | undefined =>
  languages.find((lang) => lang.code === code);
