import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { remoteImages } from "@/constants/images";
import { colors, fontSize, fontFamily, spacing, borderRadius } from "@/constants/theme";

export function NextUpCard() {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.label}>Next up</Text>
        <Text style={styles.title}>AI Video Call</Text>
        <Text style={styles.subtitle}>Practice speaking</Text>
      </View>
      <View style={styles.right}>
        <Image source={{ uri: remoteImages.aiTeacherAvatar }} style={styles.avatar} />
        <Pressable style={styles.callButton}>
          <Ionicons name="videocam" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.tint.lightPurple,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.xxl,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.medium,
    color: colors.neutral.textSecondary,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: fontSize.h3.size,
    fontFamily: fontFamily.bold,
    color: colors.neutral.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.regular,
    color: colors.neutral.textSecondary,
  },
  right: {
    alignItems: "center",
    gap: spacing.sm,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.green,
    alignItems: "center",
    justifyContent: "center",
  },
});
