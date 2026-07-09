/**
 * Design System - Color Tokens
 *
 * Based on the Lingua design system palette.
 * Use these tokens throughout the app for consistent theming.
 */

export const colors = {
  /**
   * Primary Brand Colors
   */
  primary: {
    /** Lingua Purple - Main brand color */
    purple: "#6C4EF5",
    /** Lingua Deep Purple - Darker variant for hover/active states */
    deepPurple: "#5B3BF6",
    /** Lingua Blue - Secondary accent */
    blue: "#4D8BFF",
    /** Lingua Green - Success/confirmation */
    green: "#21C16B",
  },

  /**
   * Semantic Colors
   */
  semantic: {
    /** Success state - completed actions, positive feedback */
    success: "#21C16B",
    /** Warning state - caution, attention needed */
    warning: "#FFC800",
    /** Streak - streak indicators, fire emojis */
    streak: "#FF8A00",
    /** Error state - validation errors, destructive actions */
    error: "#FF4D4F",
    /** Info state - informational messages */
    info: "#4D8BFF",
  },

  /**
   * Neutral Colors
   */
  neutral: {
    /** Primary text color - headings, body text */
    textPrimary: "#0D132B",
    /** Secondary text color - captions, meta text */
    textSecondary: "#6B7280",
    /** Border color - dividers, card borders */
    border: "#E5E7EB",
    /** Surface color - card backgrounds, elevated surfaces */
    surface: "#F6F7FB",
    /** Background color - main screen background */
    background: "#FFFFFF",
  },
} as const;

/**
 * Color type definitions for TypeScript
 */
export type ColorToken = typeof colors;
export type PrimaryColor = keyof typeof colors.primary;
export type SemanticColor = keyof typeof colors.semantic;
export type NeutralColor = keyof typeof colors.neutral;
