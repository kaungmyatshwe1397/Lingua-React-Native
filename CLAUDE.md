@AGENTS.md

# Core pinciples
 - Read AGENTS.md files and follow it strictly
 - Keep _layout.tsx focused only on bootstrapping, and move any startup logic into a small hook if it grows.
 - Use NativeWind `className` as the default styling approach throughout the codebase. Convert all static styles to `className` and avoid `StyleSheet.create()` unless it is necessary for dynamic values, animations, platform-specific styles, unsupported Tailwind features, or reusable performance-critical styles.

---

