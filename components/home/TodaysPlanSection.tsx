import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontSize, fontFamily, spacing, borderRadius } from "@/constants/theme";
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
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>{"Today's plan"}</Text>
        <Pressable>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>

      {items.map((item) => (
        <Pressable
          key={item.id}
          style={styles.item}
          onPress={() => onToggleItem(item.id)}
        >
          <View style={[styles.iconContainer, { backgroundColor: PLAN_TYPE_CONFIG[item.type].color }]}>
            <Ionicons name={PLAN_TYPE_CONFIG[item.type].icon} size={20} color="#fff" />
          </View>
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
          {item.completed ? (
            <View style={styles.checkmark}>
              <Ionicons name="checkmark" size={16} color="#fff" />
            </View>
          ) : (
            <View style={styles.circle} />
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.base,
  },
  title: {
    fontSize: fontSize.h3.size,
    fontFamily: fontFamily.semiBold,
    color: colors.neutral.textPrimary,
  },
  viewAll: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.semiBold,
    color: colors.primary.purple,
  },
  item: {
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
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: fontSize.bodyLarge.size,
    fontFamily: fontFamily.semiBold,
    color: colors.neutral.textPrimary,
  },
  itemSubtitle: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.regular,
    color: colors.neutral.textSecondary,
  },
  checkmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.neutral.border,
  },
});
