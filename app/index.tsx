import { Image } from "expo-image";
import { Redirect, Stack, router } from "expo-router";
import { useAuth, useClerk, useUser } from "@clerk/clerk-expo";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { useLanguageStore } from "@/store/useLanguageStore";
import { getLanguageByCode } from "@/data/languages";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const { selectedLanguageCode, clearSelectedLanguage } = useLanguageStore();

  const selectedLanguage = selectedLanguageCode
    ? getLanguageByCode(selectedLanguageCode)
    : null;

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.primary.purple} />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguageCode) {
    return <Redirect href="/languages" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 items-center justify-center px-6">
        {/* Selected language display */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/languages")}
          className="flex-row items-center bg-neutral-surface border border-neutral-border rounded-xl px-5 py-4 mb-3"
        >
          {selectedLanguage && (
            <Image
              source={{ uri: selectedLanguage.flag }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
              contentFit="cover"
            />
          )}
          <View className="ml-3 flex-1">
            <Text className="text-caption text-neutral-text-secondary">
              Learning
            </Text>
            <Text className="text-h3">
              {selectedLanguage?.name || "Unknown"}
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.neutral.placeholder}
          />
        </TouchableOpacity>

        <Text className="text-secondary text-center mb-8">
          Signed in as{" "}
          <Text className="font-semibold text-neutral-text-primary">
            {user?.emailAddresses?.[0]?.emailAddress || "user"}
          </Text>
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => signOut()}
          className="bg-neutral-surface rounded-md py-3.5 px-8 mb-4"
        >
          <Text className="font-semibold text-neutral-text-secondary">
            Sign Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            clearSelectedLanguage();
          }}
          className="bg-semantic-error/10 border border-semantic-error/30 rounded-md py-3 px-6"
        >
          <Text className="font-semibold text-semantic-error text-sm">
            Clear Language Selection (Test)
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
