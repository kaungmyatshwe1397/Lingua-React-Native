import { useFonts as useExpoFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

/**
 * Custom hook to load Poppins font family
 *
 * @example
 * const [fontsLoaded] = useFonts();
 *
 * if (!fontsLoaded) {
 *   return <SplashScreen />;
 * }
 */
export function useFonts() {
  const [fontsLoaded, fontError] = useExpoFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return { fontsLoaded, fontError };
}
