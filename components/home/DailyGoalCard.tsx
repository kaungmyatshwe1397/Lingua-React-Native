import { View, Text, Image, StyleSheet } from "react-native";
import { images } from "@/constants/images";
import { colors, fontSize, fontFamily, spacing, borderRadius, shadows } from "@/constants/theme";

interface DailyGoalCardProps {
  dailyXP: number;
  dailyGoal: number;
}

export function DailyGoalCard({ dailyXP, dailyGoal }: DailyGoalCardProps) {
  const progressPercent = Math.min((dailyXP / dailyGoal) * 100, 100);

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.label}>Daily goal</Text>
        <View style={styles.xpRow}>
          <Text style={styles.currentXP}>{dailyXP}</Text>
          <Text style={styles.separator}> / {dailyGoal} XP</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>
      </View>
      <Image source={images.treasure} style={styles.treasureImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.neutral.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.base,
    ...shadows.sm,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.medium,
    color: colors.neutral.textSecondary,
    marginBottom: spacing.xs,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: spacing.sm,
  },
  currentXP: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.neutral.textPrimary,
  },
  separator: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.regular,
    color: colors.neutral.textSecondary,
  },
  progressTrack: {
    height: 8,
    backgroundColor: colors.neutral.border,
    borderRadius: borderRadius.full,
    overflow: "hidden",
    width: "80%",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.semantic.streak,
    borderRadius: borderRadius.full,
  },
  treasureImage: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
});
