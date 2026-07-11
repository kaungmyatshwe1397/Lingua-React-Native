import { useEffect, useRef, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  NativeSyntheticEvent,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  onVerify?: (code: string) => Promise<void>;
  onResend?: () => Promise<void>;
}

const CODE_LENGTH = 6;

export default function VerificationModal({
  visible,
  onClose,
  email,
  onVerify,
  onResend,
}: VerificationModalProps) {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  // Reset code when modal opens
  useEffect(() => {
    if (visible) {
      setCode(Array(CODE_LENGTH).fill(""));
      setError("");
      setVerifying(false);
      // Focus first input after a short delay
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 300);
    }
  }, [visible]);

  const verifyCode = async (fullCode: string) => {
    if (!onVerify) return;
    setVerifying(true);
    setError("");
    try {
      await onVerify(fullCode);
      onClose();
    } catch (err: any) {
      setError(err?.message || "Verification failed. Please try again.");
      setCode(Array(CODE_LENGTH).fill(""));
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    } finally {
      setVerifying(false);
    }
  };

  const handleChange = (text: string, index: number) => {
    // Only allow digits
    const digit = text.replace(/[^0-9]/g, "").slice(-1);

    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    setError("");

    // Auto-advance to next input
    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits are entered
    if (newCode.every((d) => d !== "")) {
      const fullCode = newCode.join("");
      verifyCode(fullCode);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<{ key: string }>,
    index: number
  ) => {
    // Handle backspace - go to previous input
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    if (onResend) {
      await onResend();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View
            className="bg-neutral-background px-6 pt-8"
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingBottom: Platform.OS === "ios" ? 40 : 24,
            }}
          >
            {/* Handle bar */}
            <View className="w-10 h-1 bg-neutral-border rounded self-center mb-6" />

            {/* Icon */}
            <View className="w-16 h-16 rounded-full bg-tint-purple items-center justify-center self-center mb-5">
              <Ionicons name="mail-outline" size={32} color={colors.primary.purple} />
            </View>

            {/* Title */}
            <Text className="text-h3 text-center mb-2">
              Check your email
            </Text>

            {/* Subtitle */}
            <Text className="text-secondary text-center mb-7 leading-[22px]">
              We sent a 6-digit verification code to{"\n"}
              <Text className="font-semibold text-neutral-text-primary">
                {email}
              </Text>
            </Text>

            {/* Code inputs */}
            <View className="flex-row justify-center gap-2.5 mb-2">
              {Array.from({ length: CODE_LENGTH }).map((_, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  value={code[index]}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  style={{
                    width: 48,
                    height: 56,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: code[index] ? colors.primary.purple : colors.neutral.border,
                    backgroundColor: code[index] ? colors.tint.lightPurple : colors.tint.offWhite,
                    textAlign: "center",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 22,
                    color: colors.neutral.textPrimary,
                  }}
                />
              ))}
            </View>

            {/* Error message */}
            {error ? (
              <Text className="text-error mt-2 mb-3">{error}</Text>
            ) : null}

            {/* Verifying indicator */}
            {verifying ? (
              <View className="flex-row items-center justify-center mb-4 mt-2">
                <ActivityIndicator size="small" color={colors.primary.purple} />
                <Text className="text-body-small ml-2">Verifying...</Text>
              </View>
            ) : null}

            {/* Resend link */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="self-center mb-6"
              onPress={handleResend}
            >
              <Text className="text-secondary">
                Didn{"'"}t receive the code?{" "}
                <Text className="font-semibold text-primary-purple">
                  Resend
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Close button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onClose}
              disabled={verifying}
              className="bg-neutral-surface rounded-md py-3.5 items-center"
              style={{ opacity: verifying ? 0.5 : 1 }}
            >
              <Text className="font-semibold text-neutral-text-secondary">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
