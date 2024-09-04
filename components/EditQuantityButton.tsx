import React from "react";
import { StyleSheet, View } from "react-native";

import { IconButton } from "./IconButton";
import { QuantityInput } from "./QuantityInput";
import { CartItem, useCart } from "../store/useCart";

export type EditQuantityButtonProps = { cartItem: CartItem };

export const EditQuantityButton = ({ cartItem }: EditQuantityButtonProps) => {
  const { quantity, stock, id, title } = cartItem;
  const addOrEditCartItem = useCart((state) => state.addOrEditCartItem);
  const removeCartItem = useCart((state) => state.removeCartItem);

  const handleDecrease = () => {
    addOrEditCartItem({
      ...cartItem,
      quantity: quantity - 1,
    });
  };
  const handleIncrease = () => {
    addOrEditCartItem({
      ...cartItem,
      quantity: quantity + 1,
    });
  };
  const handleRemove = () => {
    removeCartItem(id);
  };

  return (
    <View style={styles.inline}>
      <QuantityInput
        value={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        maxValue={stock - quantity}
        minValue={1}
      />
      <IconButton
        name="trash-o"
        size={30}
        buttonStyles={styles.remove}
        onPress={handleRemove}
        accessibilityLabel={`Remove ${title} from the cart`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: "row",
    alignItems: "center",
  },
  remove: {
    marginLeft: 16,
  },
});
