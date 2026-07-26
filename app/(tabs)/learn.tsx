import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { getUnitsByLanguage } from "@/data/units";
import { getLessonsByUnit } from "@/data/lessons";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import { colors } from "@/constants/theme";

export default function LearnScreen() {
  const router = useRouter();
  const { selectedLanguageCode } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();

  // Get units for selected language, default to Japanese
  const languageCode = selectedLanguageCode || "ja";
  const units = getUnitsByLanguage(languageCode);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold text-gray-900">Learn</Text>
          <Text className="text-gray-500 mt-1">
            Start your learning journey
          </Text>
        </View>

        {/* Unit List */}
        <View className="px-4 pb-8">
          {units.map((unit) => {
            // Get lessons for this unit
            const unitLessons = getLessonsByUnit(unit.id);

            // Count completed lessons
            const completedCount = unitLessons.filter(
              (lesson) =>
                lesson && completedLessonIds.includes(lesson.id)
            ).length;

            return (
              <Pressable
                key={unit.id}
                onPress={() => {
                  router.push(`/lessons/${unit.id}`);
                }}
                className="mb-4 rounded-2xl overflow-hidden"
                style={{ backgroundColor: unit.color }}
              >
                <View className="p-5">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text className="text-white text-lg font-bold">
                        Unit {unit.order}: {unit.title}
                      </Text>
                      <Text className="text-white/80 text-sm mt-1">
                        {unit.description}
                      </Text>
                      <View className="flex-row items-center mt-3">
                        <Text className="text-white/90 text-sm font-medium">
                          {completedCount} / {unitLessons.length} lessons
                        </Text>
                        {completedCount > 0 && (
                          <View className="ml-2 w-2 h-2 rounded-full bg-white" />
                        )}
                      </View>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>

                {/* Progress Bar */}
                <View className="h-1 bg-white/30">
                  <View
                    className="h-full bg-white"
                    style={{
                      width: `${
                        unitLessons.length > 0
                          ? (completedCount / unitLessons.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </View>
              </Pressable>
            );
          })}

          {units.length === 0 && (
            <View className="items-center justify-center py-12">
              <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4">
                <Ionicons name="book" size={32} color={colors.neutral.textSecondary} />
              </View>
              <Text className="text-lg font-semibold text-gray-800">
                No units available
              </Text>
              <Text className="text-gray-500 mt-2 text-center px-8">
                Select a language to start learning
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
