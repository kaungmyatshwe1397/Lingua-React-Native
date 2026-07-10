import * as SecureStore from "expo-secure-store";
import { TokenCache } from "@clerk/clerk-expo";

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        return await SecureStore.getItemAsync(key);
      } catch {
        return null;
      }
    },
    saveToken: async (key: string, token: string) => {
      try {
        return await SecureStore.setItemAsync(key, token);
      } catch {
        return;
      }
    },
    clearToken: async (key: string) => {
      try {
        return await SecureStore.deleteItemAsync(key);
      } catch {
        return;
      }
    },
  };
};

export const tokenCache = createTokenCache();
