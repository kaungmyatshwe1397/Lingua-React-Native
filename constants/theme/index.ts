/**
 * Design System - Theme Export
 *
 * Central export for all design tokens.
 * Import from this file to access the complete design system.
 *
 * @example
 * import { colors, fontSize, spacing } from '@/constants/theme';
 */

export { colors } from "./colors";
export { fontFamily, fontSize } from "./typography";
export { spacing, borderRadius, shadows } from "./spacing";

// Re-export types
export type {
  ColorToken,
  PrimaryColor,
  SemanticColor,
  NeutralColor,
  TintColor,
  BrandColor,
  UnitColor,
} from "./colors";
export type { FontFamilyToken, FontSizeToken } from "./typography";
export type { SpacingToken, BorderRadiusToken, ShadowToken } from "./spacing";
