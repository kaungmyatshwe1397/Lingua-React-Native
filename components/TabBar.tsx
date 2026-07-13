import { View, Pressable, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import { colors } from "@/constants/theme";

const ICON_SIZE = 24;

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(0);

  const TAB_COUNT = state.routes.length;
  const TAB_WIDTH = 52;
  const TAB_GAP = 4;
  const BAR_PADDING = 12;
  const TOTAL_WIDTH = TAB_COUNT * TAB_WIDTH + (TAB_COUNT - 1) * TAB_GAP + BAR_PADDING * 2;

  useEffect(() => {
    const targetX = TAB_WIDTH * state.index + TAB_GAP * state.index;
    translateX.value = withSpring(targetX, {
      damping: 18,
      stiffness: 180,
      mass: 0.8,
    });
  }, [state.index, translateX]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="items-center" style={{ paddingBottom: insets.bottom + 8 }}>
      <View
        className="flex-row items-center justify-between bg-neutral-background rounded-[28px] border border-neutral-border pt-2 pb-2 px-3"
        style={[floatingBarShadow, { width: TOTAL_WIDTH }]}
      >
        {/* Animated active indicator */}
        <Animated.View
          className="absolute w-[52px] h-10 rounded-[20px] bg-tint-purple top-2 left-3"
          style={animatedIndicatorStyle}
        />

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({ type: "tabLongPress", target: route.key });
          };

          const Icon = options.tabBarIcon;

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              className="w-[52px] items-center justify-center z-[1] gap-0.5"
            >
              {Icon && (
                <Icon
                  focused={isFocused}
                  color={isFocused ? colors.primary.purple : colors.neutral.placeholder}
                  size={ICON_SIZE}
                />
              )}
              <Text
                className="text-[9px] font-[600] tracking-[0.2px]"
                style={{ color: isFocused ? colors.primary.purple : colors.neutral.placeholder }}
                numberOfLines={1}
              >
                {typeof options.tabBarLabel === "string"
                  ? options.tabBarLabel
                  : options.title ?? route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const floatingBarShadow = StyleSheet.create({
  shadow: {
    shadowColor: colors.neutral.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
}).shadow;
