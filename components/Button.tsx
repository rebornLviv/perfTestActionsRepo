import { useTheme } from "@react-navigation/native";
import React, { forwardRef } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type ButtonProps = PressableProps & {
  text: string;
  buttonStyles?: StyleProp<ViewStyle>;
};

export const Button = forwardRef(
  ({ text, buttonStyles, ...pressableProps }: ButtonProps, ref) => {
    const { colors } = useTheme();

    return (
      <Pressable
        {...pressableProps}
        style={({ pressed }) => [
          styles.buttonText,
          { backgroundColor: colors.primary },
          buttonStyles,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  buttonText: {
    padding: 8,
    textAlign: "center",
    borderRadius: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
