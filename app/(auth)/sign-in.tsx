import { useState } from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleSignIn = () => {
    if (email.trim()) {
      setShowVerification(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6">
            {/* Back button */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              style={{ marginTop: 8, marginBottom: 4 }}
            >
              <Ionicons name="chevron-back" size={28} color="#0D132B" />
            </TouchableOpacity>

            {/* Heading */}
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 28,
                color: "#0D132B",
                marginTop: 16,
              }}
            >
              Welcome back!
            </Text>

            {/* Subtitle */}
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 15,
                color: "#6B7280",
                marginTop: 8,
              }}
            >
              Sign in to continue learning ✨
            </Text>

            {/* Mascot illustration */}
            <View className="items-center" style={{ marginTop: 12, marginBottom: 24 }}>
              <Image
                source={images.mascotAuth}
                contentFit="contain"
                style={{ width: 180, height: 160 }}
              />
            </View>

            {/* Email input */}
            <View
              style={{
                backgroundColor: "#F9FAFB",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingHorizontal: 16,
                paddingVertical: 12,
                marginBottom: 24,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                  color: "#6B7280",
                  marginBottom: 4,
                }}
              >
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 16,
                  color: "#0D132B",
                  padding: 0,
                }}
              />
            </View>

            {/* Sign In button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSignIn}
              style={{
                backgroundColor: "#6C4EF5",
                borderRadius: 14,
                paddingVertical: 18,
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 17,
                  color: "#FFFFFF",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: "#6B7280",
                  marginHorizontal: 16,
                }}
              >
                or continue with
              </Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
            </View>

            {/* Social auth buttons */}
            {/* Google */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingVertical: 15,
                marginBottom: 12,
              }}
            >
              <Ionicons name="logo-google" size={20} color="#DB4437" />
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 15,
                  color: "#0D132B",
                  marginLeft: 12,
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingVertical: 15,
                marginBottom: 12,
              }}
            >
              <Ionicons name="logo-facebook" size={22} color="#1877F2" />
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 15,
                  color: "#0D132B",
                  marginLeft: 12,
                }}
              >
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingVertical: 15,
                marginBottom: 24,
              }}
            >
              <Ionicons name="logo-apple" size={24} color="#0D132B" />
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 15,
                  color: "#0D132B",
                  marginLeft: 12,
                }}
              >
                Continue with Apple
              </Text>
            </TouchableOpacity>

            {/* Don't have account */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: 24,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Don{"'"}t have an account?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/(auth)/sign-up")}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 14,
                    color: "#6C4EF5",
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Verification Modal */}
      <VerificationModal
        visible={showVerification}
        onClose={() => setShowVerification(false)}
        email={email}
      />
    </SafeAreaView>
  );
}
