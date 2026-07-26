import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { getUnitById } from "@/data/units";
import { getLessonById } from "@/data/lessons";
import { useProgressStore } from "@/store/useProgressStore";
import { colors } from "@/constants/theme";

type TabType = "lessons" | "practice";

export default function LessonsScreen() {
  const { unitId } = useLocalSearchParams<{ unitId: string }>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("lessons");

  const { completedLessonIds } = useProgressStore();

  const unit = getUnitById(unitId ?? "");

  if (!unit) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg font-semibold text-gray-800">
            Unit not found
          </Text>
          <Pressable onPress={() => router.back()} className="mt-4">
            <Text className="text-primary-purple font-medium">Go Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // Get all lessons for this unit
  const unitLessons = unit.lessonIds
    .map((id) => getLessonById(id))
    .filter(Boolean);

  // Calculate completed lessons count
  const completedCount = unitLessons.filter(
    (lesson) => lesson && completedLessonIds.includes(lesson.id)
  ).length;

  // Derive in-progress: first incomplete lesson in this unit
  const inProgressLessonId = unitLessons.find(
    (lesson) => lesson && !completedLessonIds.includes(lesson.id)
  )?.id;

  // Get lesson status
  const getLessonStatus = (lessonId: string) => {
    if (completedLessonIds.includes(lessonId)) {
      return "completed";
    }
    if (lessonId === inProgressLessonId) {
      return "in-progress";
    }
    return "locked";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-5 pt-3 pb-2 flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <Pressable
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center -ml-2"
            >
              <Ionicons
                name="chevron-back"
                size={28}
                color={colors.neutral.textPrimary}
              />
            </Pressable>
            <View className="ml-1 flex-1">
              <Text className="text-2xl font-extrabold text-gray-900">
                {unit.title}
              </Text>
              <Text className="text-sm text-gray-500 mt-0.5">
                Unit {unit.order} • {completedCount} / {unitLessons.length}{" "}
                lessons
              </Text>
            </View>
          </View>
          <Pressable className="w-10 h-10 items-center justify-center">
            <Ionicons
              name="bookmark"
              size={24}
              color={colors.semantic.warning}
            />
          </Pressable>
        </View>

        {/* Hero Image Placeholder — colored banner with unit theme */}
        <View className="px-5 mb-5">
          <View
            className="w-full h-44 rounded-2xl overflow-hidden items-center justify-center"
            style={{ backgroundColor: unit.color }}
          >
            <Ionicons name="book" size={48} color="white" />
            <Text className="text-white/80 text-sm font-medium mt-2">
              {unit.title}
            </Text>
          </View>
        </View>

        {/* Tabs — segmented control style */}
        <View className="px-5 mb-5">
          <View className="flex-row bg-gray-100 rounded-2xl p-1">
            <Pressable
              onPress={() => setActiveTab("lessons")}
              className={`flex-1 py-3 rounded-xl items-center ${
                activeTab === "lessons" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-base font-semibold ${
                  activeTab === "lessons"
                    ? "text-primary-purple"
                    : "text-gray-500"
                }`}
              >
                Lessons
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setActiveTab("practice")}
              className={`flex-1 py-3 rounded-xl items-center ${
                activeTab === "practice" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`text-base font-semibold ${
                  activeTab === "practice"
                    ? "text-primary-purple"
                    : "text-gray-500"
                }`}
              >
                Practice
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Lesson List */}
        <View className="px-5 pb-8">
          {activeTab === "lessons" ? (
            unitLessons.map((lesson) => {
              if (!lesson) return null;

              const status = getLessonStatus(lesson.id);

              return (
                <Pressable
                  key={lesson.id}
                  onPress={() => {
                    // Navigate to lesson (placeholder for now)
                    console.log("Navigate to lesson:", lesson.id);
                  }}
                  className={`mb-3 rounded-2xl p-4 ${
                    status === "in-progress"
                      ? "border-2 border-primary-purple bg-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text className="text-sm font-medium text-gray-400">
                        Lesson {lesson.order}
                      </Text>
                      <Text className="text-base font-bold text-gray-900 mt-0.5">
                        {lesson.title}
                      </Text>
                      {status === "in-progress" && (
                        <Text className="text-sm text-primary-purple font-medium mt-1">
                          In progress
                        </Text>
                      )}
                      {status === "locked" && (
                        <Text className="text-sm text-gray-400 mt-1">
                          0 / {lesson.activities.length} lessons
                        </Text>
                      )}
                    </View>

                    {/* Status Icon */}
                    <View className="ml-3">
                      {status === "completed" && (
                        <View className="w-8 h-8 rounded-full bg-primary-green items-center justify-center">
                          <Ionicons name="checkmark" size={18} color="white" />
                        </View>
                      )}
                      {status === "in-progress" && (
                        <View
                          className="w-12 h-12 rounded-xl items-center justify-center"
                          style={{ backgroundColor: unit.color + "20" }}
                        >
                          <Ionicons
                            name="book"
                            size={24}
                            color={unit.color}
                          />
                        </View>
                      )}
                      {status === "locked" && (
                        <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
                          <Ionicons
                            name="lock-closed"
                            size={16}
                            color={colors.neutral.textSecondary}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                </Pressable>
              );
            })
          ) : (
            // Practice Tab Placeholder
            <View className="items-center justify-center py-12">
              <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4">
                <Ionicons
                  name="fitness"
                  size={32}
                  color={colors.neutral.textSecondary}
                />
              </View>
              <Text className="text-lg font-semibold text-gray-800">
                Practice coming soon
              </Text>
              <Text className="text-gray-500 mt-2 text-center px-8">
                Practice your skills with interactive exercises
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
