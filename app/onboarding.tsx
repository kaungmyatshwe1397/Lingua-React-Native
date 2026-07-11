import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <View className="flex-1 px-6">
        {/* Logo and brand name */}
        <View className="flex-row items-center mt-2">
          <Image
            source={images.mascotLogo}
            contentFit="contain"
            style={{ width: 48, height: 48 }}
          />
          <Text className="ml-2 font-bold text-xl text-neutral-text-primary">
            Vibe-Linguo
          </Text>
        </View>

        {/* Heading */}
        <View className="mt-8">
          <Text className="font-bold text-[30px] leading-[38px] text-neutral-text-primary">
            Your AI language
          </Text>
          <Text className="font-bold text-[30px] leading-[38px] text-primary-purple">
            teacher.
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="text-body-large mt-3 text-neutral-text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Mascot illustration with speech bubbles */}
        <View className="flex-1 items-center justify-center">
          <View style={{ width: "100%", height: 320 }}>
            {/* Speech bubbles */}
            <View
              className="absolute items-center"
              style={{
                top: 0,
                left: -4,
                backgroundColor: colors.tint.grayBlue,
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                transform: [{ rotate: "-3deg" }],
                zIndex: 1,
              }}
            >
              <Text className="text-sm font-medium text-neutral-text-primary">
                Hello!
              </Text>
            </View>

            <View
              className="absolute items-center"
              style={{
                top: -4,
                right: 10,
                backgroundColor: colors.tint.purple,
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                transform: [{ rotate: "4deg" }],
                zIndex: 1,
              }}
            >
              <Text className="text-sm font-medium text-primary-purple">
                ¡Hola!
              </Text>
            </View>

            <View
              className="absolute items-center"
              style={{
                top: 80,
                right: -4,
                backgroundColor: colors.tint.pink,
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                zIndex: 1,
              }}
            >
              <Text className="text-sm font-medium text-semantic-error">
                你好!
              </Text>
            </View>

            {/* Main mascot */}
            <Image
              source={images.mascotWelcome}
              contentFit="contain"
              style={{ width: "100%", height: 320 }}
            />
          </View>
        </View>

        {/* Get Started button */}
        <TouchableOpacity
          className="flex-row items-center justify-between mb-8 bg-primary-purple rounded-lg py-4 px-6"
          activeOpacity={0.8}
          onPress={() => router.push("/sign-up")}
        >
          <Text className="font-semibold text-lg text-white">
            Get Started
          </Text>
          <Ionicons name="chevron-forward" size={22} color={colors.neutral.background} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
