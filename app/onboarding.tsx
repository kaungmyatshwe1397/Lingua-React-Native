import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6">
        {/* Logo and brand name */}
        <View className="flex-row items-center mt-2">
          <Image
            source={images.mascotLogo}
            contentFit="contain"
            style={{ width: 48, height: 48 }}
          />
          <Text className="ml-2 text-neutral-text-primary" style={{ fontFamily: "Poppins_700Bold", fontSize: 22 }}>
            Vibe-Linguo
          </Text>
        </View>

        {/* Heading */}
        <View className="mt-8">
          <Text className="text-neutral-text-primary" style={{ fontFamily: "Poppins_700Bold", fontSize: 30, lineHeight: 38 }}>
            Your AI language
          </Text>
          <Text className="text-primary-purple" style={{ fontFamily: "Poppins_700Bold", fontSize: 30, lineHeight: 38 }}>
            teacher.
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="text-body-large mt-3" style={{ color: "#6B7280" }}>
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
                backgroundColor: "#F0F0F5",
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                transform: [{ rotate: "-3deg" }],
                zIndex: 1,
              }}
            >
              <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14, color: "#0D132B" }}>
                Hello!
              </Text>
            </View>

            <View
              className="absolute items-center"
              style={{
                top: -4,
                right: 10,
                backgroundColor: "#EDE9FE",
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                transform: [{ rotate: "4deg" }],
                zIndex: 1,
              }}
            >
              <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14, color: "#6C4EF5" }}>
                ¡Hola!
              </Text>
            </View>

            <View
              className="absolute items-center"
              style={{
                top: 80,
                right: -4,
                backgroundColor: "#FFF0F0",
                borderRadius: 12,
                paddingHorizontal: 14,
                paddingVertical: 8,
                zIndex: 1,
              }}
            >
              <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14, color: "#FF4D4F" }}>
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
          className="flex-row items-center justify-between mb-8"
          activeOpacity={0.8}
          onPress={() => router.back()}
          style={{
            backgroundColor: "#6C4EF5",
            borderRadius: 16,
            paddingVertical: 18,
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 17, color: "#FFFFFF" }}>
            Get Started
          </Text>
          <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
