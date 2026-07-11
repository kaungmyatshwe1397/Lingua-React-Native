import { useCallback, useEffect } from "react";
import { useSSO } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";

// Complete any pending auth sessions on mount (required by expo-web-browser)
WebBrowser.maybeCompleteAuthSession();

/**
 * Custom hook that wraps Clerk's useSSO() with:
 * - WebBrowser warm-up/cool-down for faster OAuth
 * - Linking.createURL() redirect for Expo Go compatibility
 * - Automatic session activation after SSO completes
 */
export function useSocialAuth() {
  const router = useRouter();
  const { startSSOFlow } = useSSO();

  // Warm up the browser when the hook mounts (faster OAuth opening)
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  const handleSocialAuth = useCallback(
    async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
      try {
        // Use Linking.createURL so the redirect works in Expo Go
        const redirectUrl = Linking.createURL("/sso-callback");

        const { createdSessionId, setActive } = await startSSOFlow({
          strategy,
          redirectUrl,
        });

        // If a session was created, activate it and navigate to home
        if (createdSessionId && setActive) {
          await setActive({ session: createdSessionId });
          router.replace("/");
        }
      } catch (err: any) {
        // User dismissed the browser — this is normal, don't show an error
        if (err?.message?.includes("User cancelled") || err?.message?.includes("dismiss")) {
          return;
        }
        console.error("Social auth error:", err);
      }
    },
    [startSSOFlow, router]
  );

  return { handleSocialAuth };
}
