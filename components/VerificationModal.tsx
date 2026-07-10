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
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
}

const CODE_LENGTH = 6;

export default function VerificationModal({
  visible,
  onClose,
  email,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  // Reset code when modal opens
  useEffect(() => {
    if (visible) {
      setCode(Array(CODE_LENGTH).fill(""));
      // Focus first input after a short delay
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 300);
    }
  }, [visible]);

  // Auto-navigate when all digits are entered
  useEffect(() => {
    const fullCode = code.join("");
    if (fullCode.length === CODE_LENGTH && code.every((d) => d !== "")) {
      // Small delay to show the completed state before navigating
      const timer = setTimeout(() => {
        onClose();
        router.replace("/");
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [code, onClose, router]);

  const handleChange = (text: string, index: number) => {
    // Only allow digits
    const digit = text.replace(/[^0-9]/g, "").slice(-1);

    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    // Auto-advance to next input
    if (digit && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
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
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingHorizontal: 24,
              paddingTop: 32,
              paddingBottom: Platform.OS === "ios" ? 40 : 24,
            }}
          >
            {/* Handle bar */}
            <View
              style={{
                width: 40,
                height: 4,
                backgroundColor: "#E5E7EB",
                borderRadius: 2,
                alignSelf: "center",
                marginBottom: 24,
              }}
            />

            {/* Icon */}
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: "#EDE9FE",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Ionicons name="mail-outline" size={32} color="#6C4EF5" />
            </View>

            {/* Title */}
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 22,
                color: "#0D132B",
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              Check your email
            </Text>

            {/* Subtitle */}
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#6B7280",
                textAlign: "center",
                marginBottom: 28,
                lineHeight: 22,
              }}
            >
              We sent a 6-digit verification code to{"\n"}
              <Text style={{ fontFamily: "Poppins_600SemiBold", color: "#0D132B" }}>
                {email}
              </Text>
            </Text>

            {/* Code inputs */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
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
                    borderColor: code[index] ? "#6C4EF5" : "#E5E7EB",
                    backgroundColor: code[index] ? "#F5F3FF" : "#F9FAFB",
                    textAlign: "center",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 22,
                    color: "#0D132B",
                  }}
                />
              ))}
            </View>

            {/* Resend link */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ alignSelf: "center", marginBottom: 24 }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Didn{"'"}t receive the code?{" "}
                <Text style={{ fontFamily: "Poppins_600SemiBold", color: "#6C4EF5" }}>
                  Resend
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Close button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onClose}
              style={{
                backgroundColor: "#F6F7FB",
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 15,
                  color: "#6B7280",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
