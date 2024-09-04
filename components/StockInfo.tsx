import React from "react";
import { StyleSheet, Text } from "react-native";

export type StockInfoProps = { quantity: number };

export const StockInfo = ({ quantity }: StockInfoProps) => {
  const isInStock = quantity > 0;

  return (
    <Text
      style={[styles.stockInfo, isInStock ? styles.inStock : styles.outOfStock]}
    >
      {isInStock ? "in stock" : "out of stock"}
    </Text>
  );
};

const styles = StyleSheet.create({
  stockInfo: { fontSize: 16, alignSelf: "flex-end", paddingHorizontal: 16 },
  inStock: { color: "#41B06E" },
  outOfStock: { color: "#FA7070" },
});
