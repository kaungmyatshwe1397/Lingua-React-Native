import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-h1">Vibe-Linguo</Text>

      <TouchableOpacity
        className="mt-6"
        activeOpacity={0.7}
        onPress={() => router.push("/onboarding")}
      >
        <Text
          className="text-primary-purple"
          style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16, textDecorationLine: "underline" }}
        >
          Go to Onboarding →
        </Text>
      </TouchableOpacity>
    </View>
  );
}
