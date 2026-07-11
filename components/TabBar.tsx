import { View, Pressable, StyleSheet } from "react-native";
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
    <View style={[styles.container, { paddingBottom: insets.bottom + 8 }]}>
      <View style={[styles.floatingBar, { width: TOTAL_WIDTH }]}>
        {/* Animated active indicator */}
        <Animated.View style={[styles.activeIndicator, animatedIndicatorStyle]} />

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
              style={styles.tabItem}
            >
              {Icon && (
                <Icon
                  focused={isFocused}
                  color={isFocused ? colors.primary.purple : colors.neutral.placeholder}
                  size={ICON_SIZE}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  floatingBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.neutral.background,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 12,
    // Floating shadow
    shadowColor: colors.neutral.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  activeIndicator: {
    position: "absolute",
    width: 52,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.tint.purple,
    top: 10,
    left: 12,
  },
  tabItem: {
    width: 52,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
