/**
 * Design System - Spacing Tokens
 *
 * Consistent spacing scale for padding, margins, and gaps.
 * Based on a 4px base unit for clean vertical rhythm.
 */

import { colors } from "./colors";

export const spacing = {
  /** 0px */
  none: 0,
  /** 2px - Extra tight */
  xxs: 2,
  /** 4px - Tight */
  xs: 4,
  /** 8px - Small */
  sm: 8,
  /** 12px - Default small */
  md: 12,
  /** 16px - Base */
  base: 16,
  /** 20px - Medium */
  lg: 20,
  /** 24px - Large */
  xl: 24,
  /** 32px - Extra large */
  xxl: 32,
  /** 40px - Section spacing */
  xxxl: 40,
  /** 48px - Page margins */
  page: 48,
  /** 64px - Hero spacing */
  hero: 64,
} as const;

/**
 * Border radius tokens
 */
export const borderRadius = {
  /** No radius */
  none: 0,
  /** Small radius - buttons, chips */
  sm: 8,
  /** Medium radius - cards, inputs */
  md: 12,
  /** Large radius - modals, sheets */
  lg: 16,
  /** Extra large radius - bottom sheets */
  xl: 24,
  /** Full radius - circles, pills */
  full: 9999,
} as const;

/**
 * Shadow presets for elevation
 */
export const shadows = {
  /** Subtle shadow for cards */
  sm: {
    shadowColor: colors.neutral.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  /** Medium shadow for elevated elements */
  md: {
    shadowColor: colors.neutral.textPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  /** Large shadow for modals */
  lg: {
    shadowColor: colors.neutral.textPrimary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

/**
 * Spacing type definitions
 */
export type SpacingToken = typeof spacing;
export type BorderRadiusToken = typeof borderRadius;
export type ShadowToken = typeof shadows;
