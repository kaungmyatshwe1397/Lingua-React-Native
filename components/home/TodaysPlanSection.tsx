import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import type { TodayPlanItem } from "@/types/learning";

const PLAN_TYPE_CONFIG = {
  lesson: { color: colors.primary.blue, icon: "book" as const },
  conversation: { color: colors.primary.purple, icon: "headset" as const },
  words: { color: colors.unit.pink, icon: "chatbubble-ellipses" as const },
} as const;

interface TodaysPlanSectionProps {
  items: TodayPlanItem[];
  onToggleItem: (itemId: string) => void;
}

export function TodaysPlanSection({ items, onToggleItem }: TodaysPlanSectionProps) {
  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-[20px] font-semibold text-neutral-text-primary">{"Today's plan"}</Text>
        <Pressable>
          <Text className="text-[14px] font-semibold text-primary-purple">View all</Text>
        </Pressable>
      </View>

      {items.map((item) => (
        <Pressable
          key={item.id}
          className="flex-row items-center bg-neutral-background rounded-lg p-3 mb-2 border border-neutral-border gap-3"
          onPress={() => onToggleItem(item.id)}
        >
          <View
            className="w-11 h-11 rounded-md items-center justify-center"
            style={{ backgroundColor: PLAN_TYPE_CONFIG[item.type].color }}
          >
            <Ionicons name={PLAN_TYPE_CONFIG[item.type].icon} size={20} color="#fff" />
          </View>
          <View className="flex-1">
            <Text className="text-[16px] font-semibold text-neutral-text-primary">{item.title}</Text>
            <Text className="text-[13px] font-regular text-neutral-text-secondary">{item.subtitle}</Text>
          </View>
          {item.completed ? (
            <View className="w-7 h-7 rounded-full bg-primary-purple items-center justify-center">
              <Ionicons name="checkmark" size={16} color="#fff" />
            </View>
          ) : (
            <View className="w-7 h-7 rounded-full border-2 border-neutral-border" />
          )}
        </Pressable>
      ))}
    </View>
  );
}
