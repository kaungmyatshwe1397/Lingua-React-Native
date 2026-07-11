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

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-h2 mb-2">
          Welcome to Vibe-Linguo! 🎉
        </Text>

        <Text className="text-secondary text-center mb-8">
          Signed in as{" "}
          <Text className="font-semibold text-neutral-text-primary">
            {user?.emailAddresses?.[0]?.emailAddress || "user"}
          </Text>
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/languages")}
          className="bg-neutral-surface border border-neutral-border rounded-md py-3.5 px-6 flex-row items-center mb-4"
        >
          <Ionicons
            name="language-outline"
            size={20}
            color="#6C4EF5"
            style={{ marginRight: 10 }}
          />
          <Text className="font-semibold text-neutral-text-primary">
            Choose language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => signOut()}
          className="bg-neutral-surface rounded-md py-3.5 px-8"
        >
          <Text className="font-semibold text-neutral-text-secondary">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
