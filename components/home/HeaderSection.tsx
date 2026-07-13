import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { remoteImages } from "@/constants/images";
import { colors, fontSize, fontFamily, spacing } from "@/constants/theme";
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
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={flagUrl ? { uri: flagUrl } : { uri: remoteImages.spanishFlag }}
          style={styles.flagIcon}
        />
        <Text style={styles.greeting}>{greeting}, {firstName}! 👋</Text>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.streakBadge}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakCount}>{streak}</Text>
        </View>
        <Pressable style={styles.bellButton}>
          <Ionicons name="notifications-outline" size={24} color={colors.neutral.textPrimary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: spacing.md,
    paddingBottom: spacing.base,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  flagIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  greeting: {
    fontSize: fontSize.h3.size,
    fontFamily: fontFamily.bold,
    color: colors.neutral.textPrimary,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  streakEmoji: {
    fontSize: 20,
  },
  streakCount: {
    fontSize: fontSize.bodyLarge.size,
    fontFamily: fontFamily.bold,
    color: colors.semantic.streak,
  },
  bellButton: {
    padding: spacing.xs,
  },
});
