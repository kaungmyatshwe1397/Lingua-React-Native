import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-800">Profile</Text>
        <Text className="text-gray-500 mt-2">Your learning progress</Text>
      </View>
    </SafeAreaView>
  );
}
