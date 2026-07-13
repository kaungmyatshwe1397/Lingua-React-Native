import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { remoteImages } from "@/constants/images";
import { colors } from "@/constants/theme";
import type { LanguageCode } from "@/types/learning";

const greetings: Record<LanguageCode, string> = {
  ja: "こんにちは",
  ko: "안녕하세요",
  es: "Hola",
  fr: "Bonjour",
  zh: "你好",
  de: "Hallo",
  en: "Hello",
  it: "Ciao",
  pt: "Olá",
  th: "สวัสดี",
};

interface HeaderSectionProps {
  firstName: string;
  flagUrl?: string;
  streak: number;
  languageCode?: LanguageCode;
}

export function HeaderSection({ firstName, flagUrl, streak, languageCode }: HeaderSectionProps) {
  const greeting = languageCode ? greetings[languageCode] : "Hola";

  return (
    <View className="flex-row items-center justify-between pt-3 pb-4">
      <View className="flex-row items-center gap-2">
        <Image
          source={flagUrl ? { uri: flagUrl } : { uri: remoteImages.spanishFlag }}
          className="w-8 h-8 rounded-full"
        />
        <Text className="text-[20px] font-bold text-neutral-text-primary">{greeting}, {firstName}! 👋</Text>
      </View>
      <View className="flex-row items-center gap-3">
        <View className="flex-row items-center gap-1">
          <Text className="text-[20px]">🔥</Text>
          <Text className="text-[16px] font-bold text-semantic-streak">{streak}</Text>
        </View>
        <Pressable className="p-1">
          <Ionicons name="notifications-outline" size={24} color={colors.neutral.textPrimary} />
        </Pressable>
      </View>
    </View>
  );
}
