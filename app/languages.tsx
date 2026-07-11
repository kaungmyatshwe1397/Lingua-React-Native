import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { Language } from "@/types/learning";

const POPULAR_LIMIT = 6;

export default function LanguageSelectionScreen() {
  const { selectedLanguageCode, setSelectedLanguageCode } =
    useLanguageStore();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return languages;
    return languages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(term) ||
        lang.nativeName.toLowerCase().includes(term),
    );
  }, [query]);

  const visible = query ? filtered : filtered.slice(0, POPULAR_LIMIT);

  const ListHeader = () => (
    <View className="mb-4 px-1">
      <View className="flex-row items-center mb-3">
        <Ionicons
          name="flame-outline"
          size={22}
          color="#0D132B"
          style={{ marginRight: 8 }}
        />
        <Text className="text-h3">Popular</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: Language }) => {
    const isSelected = selectedLanguageCode === item.code;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setSelectedLanguageCode(item.code)}
        className={`flex-row items-center bg-neutral-surface rounded-xl px-4 py-4 mb-2.5 ${
          isSelected
            ? "border-2 border-primary-purple"
            : "border border-neutral-border"
        }`}
      >
        <Image
          source={{ uri: item.flag }}
          style={{ width: 44, height: 44, borderRadius: 22 }}
          resizeMode="cover"
        />
        <View className="ml-3 flex-1">
          <Text className="text-h4">{item.name}</Text>
          <Text className="text-body-small mt-0.5">
            {item.learnerCount}
          </Text>
        </View>
        {isSelected ? (
          <Ionicons name="checkmark-circle" size={26} color="#6C4EF5" />
        ) : (
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-white px-5 pt-2">
        {/* Header */}
        <View className="flex-row items-center mb-4">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color="#0D132B" />
          </TouchableOpacity>
          <View className="flex-1 items-center mr-7">
            <Image
              source={images.mascotLogo}
              style={{ width: 34, height: 34 }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Title */}
        <View className="items-center mb-5">
          <Text className="text-h2 text-center">Choose a language</Text>
        </View>

        {/* Search input */}
        <View className="mb-5">
          <View className="bg-neutral-surface rounded-xl border border-neutral-border px-4 py-3.5 flex-row items-center">
            <Ionicons
              name="search"
              size={18}
              color="#6B7280"
              style={{ marginRight: 10 }}
            />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search languages"
              placeholderTextColor="#9CA3AF"
              style={{
                flex: 1,
                fontSize: 15,
                color: "#0D132B",
                padding: 0,
              }}
            />
          </View>
        </View>

        {/* Language list */}
        <FlatList
          data={visible}
          keyExtractor={(item) => item.code}
          ListHeaderComponent={ListHeader}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 16 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />

        {/* Confirm button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          disabled={!selectedLanguageCode}
          className={`btn-cta mb-4 ${
            selectedLanguageCode ? "" : "btn-cta-disabled"
          }`}
        >
          <Text className="btn-cta-text">Confirm</Text>
        </TouchableOpacity>

        {/* Earth illustration */}
        <View className="items-center pb-2">
          <Image
            source={images.earth}
            style={{ width: 260, height: 180 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
