import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { images } from "@/constants/images";
import { colors, fontSize, fontFamily, spacing, borderRadius, shadows } from "@/constants/theme";

interface ContinueLearningCardProps {
  languageName: string;
  unitNumber: number;
}

export function ContinueLearningCard({ languageName, unitNumber }: ContinueLearningCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.label}>Continue learning</Text>
        <Text style={styles.language}>{languageName}</Text>
        <Text style={styles.unit}>A1 · Unit {unitNumber}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
      <Image source={images.palace} style={styles.palaceImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.primary.purple,
    borderRadius: borderRadius.lg,
    padding: spacing.base,
    marginBottom: spacing.xl,
    overflow: "hidden",
    minHeight: 160,
    ...shadows.md,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  label: {
    fontSize: fontSize.bodySmall.size,
    fontFamily: fontFamily.medium,
    color: "rgba(255,255,255,0.8)",
    marginBottom: spacing.xs,
  },
  language: {
    fontSize: fontSize.h2.size,
    fontFamily: fontFamily.bold,
    color: "#fff",
    marginBottom: spacing.xs,
  },
  unit: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.medium,
    color: "rgba(255,255,255,0.85)",
    marginBottom: spacing.base,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: fontSize.bodyMedium.size,
    fontFamily: fontFamily.semiBold,
    color: colors.primary.purple,
  },
  palaceImage: {
    width: 120,
    height: 140,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
