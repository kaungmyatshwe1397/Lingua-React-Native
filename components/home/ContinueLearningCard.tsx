import { View, Text, Image, Pressable } from "react-native";
import { images } from "@/constants/images";
import { shadows } from "@/constants/theme";

interface ContinueLearningCardProps {
  languageName: string;
  unitNumber: number;
}

export function ContinueLearningCard({ languageName, unitNumber }: ContinueLearningCardProps) {
  return (
    <View className="flex-row bg-primary-purple rounded-lg p-4 mb-6 overflow-hidden min-h-[160px]" style={shadows.md}>
      <View className="flex-1 z-[1]">
        <Text className="text-[13px] font-medium text-white/80 mb-1">Continue learning</Text>
        <Text className="text-[24px] font-bold text-white mb-1">{languageName}</Text>
        <Text className="text-[14px] font-medium text-white/85 mb-4">A1 · Unit {unitNumber}</Text>
        <Pressable className="bg-white px-4 py-2 rounded-md self-start">
          <Text className="text-[14px] font-semibold text-primary-purple">Continue</Text>
        </Pressable>
      </View>
      <Image source={images.palace} className="absolute right-0 bottom-0 w-[120px] h-[140px]" style={{ resizeMode: "contain" }} />
    </View>
  );
}
