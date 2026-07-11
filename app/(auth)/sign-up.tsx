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
import { useSignUp } from "@clerk/clerk-expo";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import VerificationModal from "@/components/VerificationModal";
import { useSocialAuth } from "@/hooks/useSocialAuth";

export default function SignUpScreen() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const { handleSocialAuth } = useSocialAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!isLoaded || !email.trim() || !password.trim()) return;

    setLoading(true);
    setError("");

    try {
      await signUp.create({
        emailAddress: email.trim(),
        password,
      });

      // Send the verification email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setShowVerification(true);
    } catch (err: any) {
      // Handle Clerk errors
      const message =
        err?.errors?.[0]?.message || err?.message || "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    if (!isLoaded) throw new Error("Not ready");

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/");
      } else {
        throw new Error("Verification incomplete. Please try again.");
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.message || err?.message || "Invalid code. Please try again.";
      throw new Error(message);
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded) return;
    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch (err: any) {
      console.error("Resend error:", err);
    }
  };

  const canSubmit = loading || !email.trim() || !password.trim();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
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
              <Ionicons name="chevron-back" size={28} color={colors.neutral.textPrimary} />
            </TouchableOpacity>

            {/* Heading */}
            <Text className="text-h2 mt-4">Create your account</Text>

            {/* Subtitle */}
            <Text className="text-body-small mt-2">
              Start your language journey today ✨
            </Text>

            {/* Mascot illustration */}
            <View className="items-center mt-3 mb-5">
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
                placeholderTextColor={colors.neutral.placeholder}
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
                  placeholderTextColor={colors.neutral.placeholder}
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
                  color={colors.neutral.placeholder}
                />
              </TouchableOpacity>
            </View>

            {/* Error message */}
            {error ? <Text className="text-error mb-3">{error}</Text> : null}

            {/* Sign Up button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSignUp}
              disabled={canSubmit}
              className={`btn-cta mb-6 ${canSubmit ? "btn-cta-disabled" : ""}`}
            >
              {loading ? (
                <ActivityIndicator color={colors.neutral.background} />
              ) : (
                <Text className="btn-cta-text">Sign Up</Text>
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
            <TouchableOpacity
              activeOpacity={0.4}
              className="social-btn mb-3"
              onPress={() => handleSocialAuth("oauth_google")}
            >
              <Ionicons name="logo-google" size={20} color={colors.brand.google} />
              <Text className="social-btn-text">Continue with Google</Text>
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity
              activeOpacity={0.4}
              className="social-btn mb-3"
              onPress={() => handleSocialAuth("oauth_facebook")}
            >
              <Ionicons name="logo-facebook" size={22} color={colors.brand.facebook} />
              <Text className="social-btn-text">Continue with Facebook</Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              activeOpacity={0.4}
              className="social-btn mb-6"
              onPress={() => handleSocialAuth("oauth_apple")}
            >
              <Ionicons name="logo-apple" size={24} color={colors.neutral.textPrimary} />
              <Text className="social-btn-text">Continue with Apple</Text>
            </TouchableOpacity>

            {/* Already have account */}
            <View className="flex-row justify-center pb-6">
              <Text className="text-secondary">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => router.push("/sign-in")}
              >
                <Text className="link-text">Log in</Text>
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
        onVerify={handleVerify}
        onResend={handleResendCode}
      />
    </SafeAreaView>
  );
}
