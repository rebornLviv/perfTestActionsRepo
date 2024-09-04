import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { IconButton } from "./IconButton";
import { QuantityInput } from "./QuantityInput";
import { CartItem, useCart } from "../store/useCart";

export type AddToCartButtonProps = {
  cartItem: Omit<CartItem, "quantity">;
};

const ANIMATION_TIME = 500;

export const AddToCartButton = ({ cartItem }: AddToCartButtonProps) => {
  const { stock } = cartItem;
  const { cartItems, addOrEditCartItem } = useCart();
  const existedQuantity =
    cartItems.find(({ id }) => id === cartItem.id)?.quantity || 0;
  const maxQuantity = stock - existedQuantity;
  const [quantity, setQuantity] = useState(existedQuantity || 1);

  const scale = useSharedValue(1);
  const offsetY = useSharedValue(0);
  const offsetX = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    //@ts-expect-error issue with Reanimated types
    transform: [
      { translateY: offsetY.value },
      { translateX: offsetX.value },
      { scale: scale.value },
    ],
  }));

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    // Animate the cart icon
    scale.value = withSequence(
      withTiming(0.5, {
        duration: ANIMATION_TIME,
      }),
      withTiming(1, {
        duration: 0,
      }),
    );

    offsetX.value = withSequence(
      withTiming(40, {
        duration: ANIMATION_TIME,
        easing: Easing.elastic(1),
      }),
      withTiming(0, {
        duration: 0,
      }),
    );

    offsetY.value = withSequence(
      withTiming(
        500,
        {
          duration: ANIMATION_TIME,
        },
        (finished) => {
          if (finished) {
            // When the animation finishes, add the item to the cart
            runOnJS(addOrEditCartItem)({
              ...cartItem,
              quantity,
            });
          }
        },
      ),
      withTiming(0, {
        duration: 0,
      }),
    );
  };

  return stock > 0 ? (
    <View style={styles.container}>
      <QuantityInput
        value={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        maxValue={maxQuantity}
        minValue={1}
      />

      <View>
        {/* Duplicated Cart icon to be animated */}
        <Animated.View
          style={[styles.duplicatedCartIcon, animatedStyles]}
          testID="animated-cart-button"
        >
          <FontAwesome size={40} name="cart-plus" />
        </Animated.View>

        <IconButton
          size={40}
          name="cart-plus"
          buttonStyles={styles.addToCart}
          disabled={quantity === 0}
          onPress={handleAddToCart}
          accessibilityLabel="Add to cart"
        />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCart: {
    marginLeft: 16,
  },
  duplicatedCartIcon: {
    position: "absolute",
    left: 16,
  },
});
