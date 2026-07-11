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
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn } from "@clerk/clerk-expo";
import { images } from "@/constants/images";

export default function SignInScreen() {
  const router = useRouter();
  const { isLoaded, signIn,setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!isLoaded || !email.trim() || !password.trim()) return;

    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: email.trim(),
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/");
      } else {
        setError("Sign in incomplete. Please try again.");
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.message || err?.message || "Invalid email or password. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = loading || !email.trim() || !password.trim();

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
              className="mt-2 mb-1"
            >
              <Ionicons name="chevron-back" size={28} color="#0D132B" />
            </TouchableOpacity>

            {/* Heading */}
            <Text className="text-h2 mt-4">Welcome back!</Text>

            {/* Subtitle */}
            <Text className="text-body-small mt-2">
              Sign in to continue learning ✨
            </Text>

            {/* Mascot illustration */}
            <View className="items-center mt-3 mb-6">
              <Image
                source={images.mascotAuth}
                contentFit="contain"
                style={{ width: 180, height: 160 }}
              />
            </View>

            {/* Email input */}
            <View className="input-field mb-4">
              <Text className="input-label">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                className="input-value"
              />
            </View>

            {/* Password input */}
            <View className="input-field mb-6 flex-row items-center">
              <View className="flex-1">
                <Text className="input-label">Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  className="input-value"
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Error message */}
            {error ? <Text className="text-error mb-3">{error}</Text> : null}

            {/* Sign In button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSignIn}
              disabled={canSubmit}
              className={`btn-cta mb-6 ${canSubmit ? "btn-cta-disabled" : ""}`}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text className="btn-cta-text">Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Divider */}
            <View className="divider mb-5">
              <View className="flex-1 h-px bg-neutral-border" />
              <Text className="text-body-small mx-4">or continue with</Text>
              <View className="flex-1 h-px bg-neutral-border" />
            </View>

            {/* Social auth buttons */}
            {/* Google */}
            <TouchableOpacity activeOpacity={0.4} className="social-btn mb-3">
              <Ionicons name="logo-google" size={20} color="#191818" />
              <Text className="social-btn-text">Continue with Google</Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity activeOpacity={0.4} className="social-btn mb-3">
              <Ionicons name="logo-facebook" size={22} color="#1877F2" />
              <Text className="social-btn-text">Continue with Facebook</Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity activeOpacity={0.4} className="social-btn mb-6">
              <Ionicons name="logo-apple" size={24} color="#0D132B" />
              <Text className="social-btn-text">Continue with Apple</Text>
            </TouchableOpacity>

            {/* Don't have account */}
            <View className="flex-row justify-center pb-6">
              <Text className="text-secondary">
                Don{"'"}t have an account?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/sign-up")}
              >
                <Text className="link-text">Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
