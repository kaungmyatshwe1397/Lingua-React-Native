import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import streakFire from "@/assets/images/streak-fire.png";
import earth from "@/assets/images/earth.png";
import palace from "@/assets/images/palace.png";
import treasure from "@/assets/images/treasure.png";

/**
 * Centralized image imports.
 *
 * Usage:
 *   import { images } from "@/constants/images";
 *   <Image source={images.mascotWelcome} />
 */
export const images = {
  mascotAuth,
  mascotWelcome,
  mascotLogo,
  streakFire,
  earth,
  palace,
  treasure,
} as const;
