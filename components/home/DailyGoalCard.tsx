import { View, Text, Image } from "react-native";
import { images } from "@/constants/images";
import { shadows } from "@/constants/theme";

interface DailyGoalCardProps {
  dailyXP: number;
  dailyGoal: number;
}

export function DailyGoalCard({ dailyXP, dailyGoal }: DailyGoalCardProps) {
  const progressPercent = Math.min((dailyXP / dailyGoal) * 100, 100);

  return (
    <View className="flex-row items-center justify-between bg-neutral-surface rounded-lg p-4 mb-4" style={shadows.sm}>
      <View className="flex-1">
        <Text className="text-[14px] font-medium text-neutral-text-secondary mb-1">Daily goal</Text>
        <View className="flex-row items-baseline mb-2">
          <Text className="text-[28px] font-bold text-neutral-text-primary">{dailyXP}</Text>
          <Text className="text-[14px] font-regular text-neutral-text-secondary"> / {dailyGoal} XP</Text>
        </View>
        <View className="h-2 bg-neutral-border rounded-full overflow-hidden w-[80%]">
          <View className="h-full bg-semantic-streak rounded-full" style={{ width: `${progressPercent}%` }} />
        </View>
      </View>
      <Image source={images.treasure} className="w-[72px] h-[72px]" style={{ resizeMode: "contain" }} />
    </View>
  );
}
