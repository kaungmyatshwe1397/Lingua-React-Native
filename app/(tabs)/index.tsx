import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import { getLanguageByCode } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { colors, spacing } from "@/constants/theme";
import { HeaderSection } from "@/components/home/HeaderSection";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { ContinueLearningCard } from "@/components/home/ContinueLearningCard";
import { TodaysPlanSection } from "@/components/home/TodaysPlanSection";
import { NextUpCard } from "@/components/home/NextUpCard";

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageCode } = useLanguageStore();
  const { dailyXP, dailyGoal, streak, todayPlan, togglePlanItem } = useProgressStore();

  const selectedLanguage = selectedLanguageCode ? getLanguageByCode(selectedLanguageCode) : null;
  const units = selectedLanguageCode ? getUnitsByLanguage(selectedLanguageCode) : [];
  const currentUnitNumber = units.length > 0 ? units[units.length - 1].order : 1;

  const firstName = user?.firstName ?? "Learner";
  const flagUrl = selectedLanguage?.flag;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeaderSection firstName={firstName} flagUrl={flagUrl} streak={streak} />
        <DailyGoalCard dailyXP={dailyXP} dailyGoal={dailyGoal} />
        <ContinueLearningCard
          languageName={selectedLanguage?.name ?? "Spanish"}
          unitNumber={currentUnitNumber}
        />
        <TodaysPlanSection items={todayPlan} onToggleItem={togglePlanItem} />
        <NextUpCard />
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
});
