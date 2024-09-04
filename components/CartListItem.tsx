import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { EditQuantityButton } from "./EditQuantityButton";
import { CartItem } from "../store/useCart";

export type CartListItemProps = { data: CartItem };

export const CartListItem = ({ data }: CartListItemProps) => {
  const { title, thumbnail, price, quantity } = data;

  return (
    <View
      style={[styles.inline, styles.container]}
      accessibilityLabel={`Cart item: ${title}`}
    >
      <Image
        style={styles.image}
        source={{ uri: thumbnail }}
        accessibilityIgnoresInvertColors
        resizeMode="contain"
      />
      <View>
        <Text>{title}</Text>
        <Text>${price * quantity}</Text>
        <EditQuantityButton cartItem={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  inline: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 16,
    width: 100,
    height: 80,
  },
});
