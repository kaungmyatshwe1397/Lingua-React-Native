import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { remoteImages } from "@/constants/images";

export function NextUpCard() {
  return (
    <View className="flex-row items-center justify-between bg-tint-light-purple rounded-lg p-4 mb-8">
      <View className="flex-1">
        <Text className="text-[13px] font-medium text-neutral-text-secondary mb-1">Next up</Text>
        <Text className="text-[20px] font-bold text-neutral-text-primary mb-1">AI Video Call</Text>
        <Text className="text-[13px] font-regular text-neutral-text-secondary">Practice speaking</Text>
      </View>
      <View className="items-center gap-2">
        <Image source={{ uri: remoteImages.aiTeacherAvatar }} className="w-14 h-14 rounded-full" />
        <Pressable className="w-10 h-10 rounded-full bg-primary-green items-center justify-center">
          <Ionicons name="videocam" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}
