import { View, Text, ScrollView, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";
import { images, remoteImages } from "@/constants/images";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import { getLanguageByCode } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { colors, fontSize, fontFamily, spacing, borderRadius, shadows } from "@/constants/theme";

const PLAN_TYPE_CONFIG = {
  lesson: { color: colors.primary.blue, icon: "book" as const },
  conversation: { color: colors.primary.purple, icon: "headset" as const },
  words: { color: colors.unit.pink, icon: "chatbubble-ellipses" as const },
} as const;

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageCode } = useLanguageStore();
  const { dailyXP, dailyGoal, streak, todayPlan, togglePlanItem } =
    useProgressStore();

  const selectedLanguage = selectedLanguageCode ? getLanguageByCode(selectedLanguageCode) : null;
  const units = selectedLanguageCode ? getUnitsByLanguage(selectedLanguageCode) : [];
  const currentUnit = units.length > 0 ? units[units.length - 1] : null;
  const currentUnitNumber = currentUnit?.order ?? 1;

  const progressPercent = Math.min((dailyXP / dailyGoal) * 100, 100);

  const firstName = user?.firstName ?? "Learner";
  const flagUrl = selectedLanguage?.flag;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ──────────────────────────────────────── */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {flagUrl ? (
              <Image source={{ uri: flagUrl }} style={styles.flagIcon} />
            ) : (
              <View style={[styles.flagIcon, styles.flagPlaceholder]}>
                <Text style={styles.flagPlaceholderText}>🌐</Text>
              </View>
            )}
            <Text style={styles.greeting}>Hola, {firstName}! 👋</Text>
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

        {/* ── Daily Goal Card ─────────────────────────────── */}
        <View style={styles.dailyGoalCard}>
          <View style={styles.dailyGoalContent}>
            <Text style={styles.dailyGoalLabel}>Daily goal</Text>
            <View style={styles.dailyGoalXPRow}>
              <Text style={styles.dailyGoalCurrent}>{dailyXP}</Text>
              <Text style={styles.dailyGoalSeparator}> / {dailyGoal} XP</Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progressPercent}%` },
                ]}
              />
            </View>
          </View>
          <Image source={images.treasure} style={styles.treasureImage} />
        </View>

        {/* ── Continue Learning Card ──────────────────────── */}
        <View style={styles.continueCard}>
          <View style={styles.continueCardContent}>
            <Text style={styles.continueLabel}>Continue learning</Text>
            <Text style={styles.continueLanguage}>
              {selectedLanguage?.name ?? "Spanish"}
            </Text>
            <Text style={styles.continueUnit}>
              A1 · Unit {currentUnitNumber}
            </Text>
            <Pressable style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>
          </View>
          <Image source={images.palace} style={styles.palaceImage} />
        </View>

        {/* ── Today's Plan ────────────────────────────────── */}
        <View style={styles.planSection}>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>{"Today's plan"}</Text>
            <Pressable>
              <Text style={styles.planViewAll}>View all</Text>
            </Pressable>
          </View>

          {todayPlan.map((item) => (
            <Pressable
              key={item.id}
              style={styles.planItem}
              onPress={() => togglePlanItem(item.id)}
            >
              <View
                style={[
                  styles.planIconContainer,
                  { backgroundColor: PLAN_TYPE_CONFIG[item.type].color },
                ]}
              >
                <Ionicons
                  name={PLAN_TYPE_CONFIG[item.type].icon}
                  size={20}
                  color="#fff"
                />
              </View>
              <View style={styles.planItemText}>
                <Text style={styles.planItemTitle}>{item.title}</Text>
                <Text style={styles.planItemSubtitle}>{item.subtitle}</Text>
              </View>
              {item.completed ? (
                <View style={styles.planCheckmark}>
                  <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
              ) : (
                <View style={styles.planCircle} />
              )}
            </Pressable>
          ))}
        </View>

        {/* ── Next Up Card ────────────────────────────────── */}
        <View style={styles.nextUpCard}>
          <View style={styles.nextUpContent}>
            <Text style={styles.nextUpLabel}>Next up</Text>
            <Text style={styles.nextUpTitle}>AI Video Call</Text>
            <Text style={styles.nextUpSubtitle}>Practice speaking</Text>
          </View>
          <View style={styles.nextUpRight}>
            <Image
              source={{ uri: remoteImages.aiTeacherAvatar }}
              style={styles.nextUpAvatar}
            />
            <Pressable style={styles.nextUpCallButton}>
              <Ionicons name="videocam" size={20} color="#fff" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.xxl,
  },

  // ── Header ──────────────────────────────────────────────
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
  flagPlaceholder: {
    backgroundColor: colors.tint.grayBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  flagPlaceholderText: {
    fontSize: 18,
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

  // ── Daily Goal Card ─────────────────────────────────────
  dailyGoalCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.neutral.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.base,
    ...shadows.sm,
  },
  dailyGoalContent: {
    flex: 1,
  },
  dailyGoalLabel: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.medium,
    color: colors.neutral.textSecondary,
    marginBottom: spacing.xs,
  },
  dailyGoalXPRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: spacing.sm,
  },
  dailyGoalCurrent: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.neutral.textPrimary,
  },
  dailyGoalSeparator: {
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

  // ── Continue Learning Card ──────────────────────────────
  continueCard: {
    flexDirection: "row",
    backgroundColor: colors.primary.purple,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.xl,
    overflow: "hidden",
    minHeight: 160,
    ...shadows.md,
  },
  continueCardContent: {
    flex: 1,
    zIndex: 1,
  },
  continueLabel: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.medium,
    color: "rgba(255,255,255,0.8)",
    marginBottom: spacing.xs,
  },
  continueLanguage: {
    fontSize: fontSize.h2.size,
    fontFamily: fontFamily.bold,
    color: "#fff",
    marginBottom: spacing.xs,
  },
  continueUnit: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.medium,
    color: "rgba(255,255,255,0.85)",
    marginBottom: spacing.base,
  },
  continueButton: {
    backgroundColor: "#fff",
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    alignSelf: "flex-start",
  },
  continueButtonText: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.semiBold,
    color: colors.primary.purple,
  },
  palaceImage: {
    width: 120,
    height: 140,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  // ── Today's Plan ────────────────────────────────────────
  planSection: {
    marginBottom: spacing.xl,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.base,
  },
  planTitle: {
    fontSize: fontSize.h3.size,
    fontFamily: fontFamily.semiBold,
    color: colors.neutral.textPrimary,
  },
  planViewAll: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.semiBold,
    color: colors.primary.purple,
  },
  planItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.neutral.background,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    gap: spacing.md,
  },
  planIconContainer: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  planItemText: {
    flex: 1,
  },
  planItemTitle: {
    fontSize: fontSize.bodyLarge.size,
    fontFamily: fontFamily.semiBold,
    color: colors.neutral.textPrimary,
  },
  planItemSubtitle: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.regular,
    color: colors.neutral.textSecondary,
  },
  planCheckmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  planCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.neutral.border,
  },

  // ── Next Up Card ────────────────────────────────────────
  nextUpCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.tint.lightPurple,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.xxl,
  },
  nextUpContent: {
    flex: 1,
  },
  nextUpLabel: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.medium,
    color: colors.neutral.textSecondary,
    marginBottom: spacing.xs,
  },
  nextUpTitle: {
    fontSize: fontSize.h3.size,
    fontFamily: fontFamily.bold,
    color: colors.neutral.textPrimary,
    marginBottom: spacing.xs,
  },
  nextUpSubtitle: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.regular,
    color: colors.neutral.textSecondary,
  },
  nextUpRight: {
    alignItems: "center",
    gap: spacing.sm,
  },
  nextUpAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  nextUpCallButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.green,
    alignItems: "center",
    justifyContent: "center",
  },
});
