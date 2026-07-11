import { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "`https://flagcdn.com/w320/ja.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "`https://flagcdn.com/w320/ko.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "`https://flagcdn.com/w320/es.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "`https://flagcdn.com/w320/fr.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "`https://flagcdn.com/w320/zh.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "`https://flagcdn.com/w320/de.png`",
    difficulty: "beginner",
    totalUnits: 2,
  },
];

export const getLanguageByCode = (code: string): Language | undefined =>
  languages.find((lang) => lang.code === code);
