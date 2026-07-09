/**
 * Design System - Typography Tokens
 *
 * Font family: Poppins
 * A modern, geometric sans-serif typeface that provides
 * excellent readability and a friendly personality.
 */

export const fontFamily = {
  /** Poppins Regular (400) - Body text, captions */
  regular: "Poppins_400Regular",
  /** Poppins Medium (500) - Subheadings, emphasis */
  medium: "Poppins_500Medium",
  /** Poppins SemiBold (600) - Section titles, card titles */
  semiBold: "Poppins_600SemiBold",
  /** Poppins Bold (700) - Page titles, headings */
  bold: "Poppins_700Bold",
} as const;

/**
 * Typography scale with sizes and line heights
 */
export const fontSize = {
  /** H1 - Page/Screen Title: 32px, Bold, line-height 1.2 */
  h1: {
    size: 32,
    lineHeight: 38, // 32 * 1.2
    fontFamily: fontFamily.bold,
  },
  /** H2 - Section Title: 24px, SemiBold, line-height 1.3 */
  h2: {
    size: 24,
    lineHeight: 31, // 24 * 1.3
    fontFamily: fontFamily.semiBold,
  },
  /** H3 - Card/Module Title: 20px, SemiBold, line-height 1.3 */
  h3: {
    size: 20,
    lineHeight: 26, // 20 * 1.3
    fontFamily: fontFamily.semiBold,
  },
  /** H4 - Subheading: 16px, Medium, line-height 1.4 */
  h4: {
    size: 16,
    lineHeight: 22, // 16 * 1.4
    fontFamily: fontFamily.medium,
  },
  /** Body Large - Important content: 16px, Regular, line-height 1.6 */
  bodyLarge: {
    size: 16,
    lineHeight: 26, // 16 * 1.6
    fontFamily: fontFamily.regular,
  },
  /** Body Medium - Body text: 14px, Regular, line-height 1.6 */
  bodyMedium: {
    size: 14,
    lineHeight: 22, // 14 * 1.6
    fontFamily: fontFamily.regular,
  },
  /** Body Small - Supporting text: 13px, Regular, line-height 1.6 */
  bodySmall: {
    size: 13,
    lineHeight: 21, // 13 * 1.6
    fontFamily: fontFamily.regular,
  },
  /** Caption - Labels, meta text: 11px, Regular, line-height 1.4 */
  caption: {
    size: 11,
    lineHeight: 15, // 11 * 1.4
    fontFamily: fontFamily.regular,
  },
} as const;

/**
 * Typography type definitions
 */
export type FontFamilyToken = typeof fontFamily;
export type FontSizeToken = typeof fontSize;
