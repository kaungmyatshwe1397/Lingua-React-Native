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
    /** Placeholder text color - input placeholders, muted icons */
    placeholder: "#9CA3AF",
    /** Disabled state color - disabled CTA buttons */
    disabled: "#a78bfa",
  },

  /**
   * Tint Colors - Light background tints for bubbles, inputs, badges
   */
  tint: {
    /** Gray-blue tint - onboarding "Hello!" bubble */
    grayBlue: "#F0F0F5",
    /** Light purple tint - onboarding "Hola!" bubble, verification icon */
    purple: "#EDE9FE",
    /** Light pink tint - onboarding "你好!" bubble */
    pink: "#FFF0F0",
    /** Very light purple - verification input filled state */
    lightPurple: "#F5F3FF",
    /** Off-white - verification input empty state */
    offWhite: "#F9FAFB",
  },

  /**
   * Brand Colors - Third-party brand identifiers
   */
  brand: {
    /** Google logo color */
    google: "#191818",
    /** Facebook brand color */
    facebook: "#1877F2",
  },

  /**
   * Unit Colors - Palette for unit card theming
   */
  unit: {
    /** Pink - used for Greetings units */
    pink: "#FF4B6E",
    /** Orange - used for Numbers units */
    orange: "#FF8B00",
    /** Blue - used for Greetings/Numbers units */
    blue: "#1CB0F6",
    /** Purple - used for Numbers units */
    purple: "#CE82FF",
    /** Amber - used for Greetings/Colors units */
    amber: "#FF9600",
    /** Cobalt - used for Colors units */
    cobalt: "#2B70C9",
  },
} as const;

/**
 * Color type definitions for TypeScript
 */
export type ColorToken = typeof colors;
export type PrimaryColor = keyof typeof colors.primary;
export type SemanticColor = keyof typeof colors.semantic;
export type NeutralColor = keyof typeof colors.neutral;
export type TintColor = keyof typeof colors.tint;
export type BrandColor = keyof typeof colors.brand;
export type UnitColor = keyof typeof colors.unit;
