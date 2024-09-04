import { router } from "expo-router";
import { View, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { CheckoutForm } from "../../../components/CheckoutForm";
import { useCart } from "../../../store/useCart";
import { theme } from "../../../utils/theme";

const ANIMATION_TIME = 1000;

const Checkout = () => {
  const clearCart = useCart((state) => state.clearCart);

  const width = useSharedValue(0);

  const clearCartAndNavigate = () => {
    clearCart();
    router.replace("/success");
  };

  const handleSubmit = () => {
    width.value = withTiming(
      100,
      {
        duration: ANIMATION_TIME,
      },
      (finished) => {
        if (finished) {
          runOnJS(clearCartAndNavigate)();
        }
      },
    );
  };

  const animatedStyles = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.loadingBar, animatedStyles]}
        accessibilityLabel="Checkout progress"
      />
      <CheckoutForm onSubmit={handleSubmit} />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loadingBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 5,
    backgroundColor: theme.colors.primary,
  },
});
