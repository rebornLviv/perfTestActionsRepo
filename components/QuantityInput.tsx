import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { IconButton } from "./IconButton";

export type QuantityInputProps = {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minValue?: number;
  maxValue?: number;
};

export const QuantityInput = ({
  value,
  onDecrease,
  onIncrease,
  minValue = 0,
  maxValue = 100,
}: QuantityInputProps) => {
  const handleDecrease = () => {
    if (value > minValue) {
      onDecrease();
    }
  };
  const handleIncrease = () => {
    if (value < maxValue) {
      onIncrease();
    }
  };

  return (
    <View style={[styles.container, styles.quantityContainer]}>
      <IconButton
        onPress={handleDecrease}
        disabled={value === minValue}
        accessibilityLabel="Decrease quantity button"
        name="minus-circle"
      />
      <Text
        style={[styles.quantity]}
        accessibilityLabel={`Quantity: ${value}`}
        accessibilityValue={{ min: minValue, now: value, max: maxValue }}
      >
        {value}
      </Text>
      <IconButton
        onPress={handleIncrease}
        disabled={value === maxValue}
        accessibilityLabel="Increase quantity button"
        name="plus-circle"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityContainer: {
    borderRadius: 16,
  },
  quantity: {
    paddingHorizontal: 8,
    textAlign: "center",
    minWidth: 40,
    height: 40,
    lineHeight: 40,
  },
});
