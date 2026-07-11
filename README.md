# Vibe-Linguo

A Duolingo-inspired AI language learning mobile app built with Expo and React Native. Learn languages through interactive lessons with vocabulary, phrases, matching exercises, and quizzes -- powered by an AI teacher assistant.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Expo SDK 54 |
| UI | React Native 0.81 |
| Routing | Expo Router v6 |
| Styling | NativeWind v5 + Tailwind CSS v4 |
| State | Zustand + AsyncStorage |
| Auth | Clerk (email + OAuth) |
| Fonts | Poppins (via @expo-google-fonts) |
| Language | TypeScript 5.9 |

## Project Structure

```
app/
  _layout.tsx            # Root layout (fonts, splash, ClerkProvider)
  index.tsx              # Home screen (auth check, welcome)
  onboarding.tsx         # Onboarding screen (CTA to sign up)
  languages.tsx          # Language selection screen
  (auth)/
    _layout.tsx          # Auth group layout (redirect if signed in)
    sign-in.tsx          # Email/password sign-in
    sign-up.tsx          # Email/password sign-up + verification
components/
  VerificationModal.tsx  # 6-digit email verification modal
constants/
  images.ts              # Centralized image imports
  theme/
    index.ts             # Barrel export for all design tokens
    colors.ts            # Color tokens (primary, semantic, neutral, tint, brand, unit)
    typography.ts        # Font family and font size tokens
    spacing.ts           # Spacing, border radius, and shadow tokens
data/
  languages.ts           # Language definitions (6 languages)
  units.ts               # Unit definitions (12 units, 2 per language)
  lessons.ts             # Lesson content (12 lessons with activities)
hooks/
  useFonts.ts            # Poppins font loading hook
  useSocialAuth.ts       # OAuth social auth hook (Google, Facebook, Apple)
lib/
  clerk.ts               # Clerk token cache (expo-secure-store)
store/
  useLanguageStore.ts    # Language selection state (Zustand + AsyncStorage)
types/
  learning.ts            # TypeScript types for learning content
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4+
- Expo CLI (`npm install -g expo-cli`)
- A [Clerk](https://clerk.com) account with a publishable key

### Installation

```bash
# Install dependencies
yarn install

# Create a .env file and add your Clerk publishable key
echo "EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here" > .env
```

### Running the App

```bash
# Start the Expo dev server
yarn start

# Run on specific platform
yarn android
yarn ios
yarn web
```

## Features

- **Onboarding** -- Welcome screen with mascot illustration and speech bubbles
- **Authentication** -- Email/password sign-up and sign-in with Clerk
- **Email Verification** -- 6-digit code verification modal with auto-submit
- **Social Auth** -- OAuth sign-in via Google, Facebook, and Apple
- **Language Selection** -- Search and select from 6 languages with flag icons
- **Lesson Content** -- Vocabulary, phrases, matching, and quiz activities across 6 languages
- **Design System** -- Centralized color, typography, and spacing tokens with NativeWind utilities
- **Persistent State** -- Language selection saved via Zustand + AsyncStorage

## Architecture

The app uses Expo Router v6 for file-based routing with a `Stack` navigator. Authentication is handled by Clerk with a secure token cache stored in `expo-secure-store`. State management uses Zustand with AsyncStorage persistence for user preferences.

### Routing Flow

```
/ (index) --> if not signed in --> /onboarding --> /sign-up or /sign-in
/ (index) --> if signed in --> Welcome screen --> /languages
```

### Styling

Styling uses NativeWind v5 with Tailwind CSS v4. Design tokens are defined in three layers:

1. **TypeScript tokens** in `constants/theme/` -- used for inline styles and programmatic access
2. **CSS variables** in `global.css` -- used as Tailwind theme tokens and custom utility classes
3. **NativeWind classes** -- used in JSX via `className`

## Available Scripts

| Script | Description |
|---|---|
| `yarn start` | Start the Expo development server |
| `yarn android` | Run on Android device/emulator |
| `yarn ios` | Run on iOS device/simulator |
| `yarn web` | Run in web browser |
| `yarn lint` | Run ESLint via Expo |
| `yarn reset-project` | Reset project to blank state |

## Design System

The app uses the "Lingua" design system with the Poppins font family. Key design tokens:

- **Primary Purple** `#6C4EF5` -- main brand color
- **Poppins** -- 4 weights (Regular, Medium, SemiBold, Bold)
- **Spacing** -- 4px base unit scale
- **Border Radius** -- sm (8px), md (12px), lg (16px), xl (24px)

Custom CSS utilities are defined in `global.css` for typography (`text-h1` through `text-caption`), components (`card`, `btn-cta`, `input-field`, `social-btn`), and more.

## License

This is a learning project. See the source for implementation details.
