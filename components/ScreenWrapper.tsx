import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

export type ScreenWrapperProps = {
  children: ReactNode;
  isLoading: boolean;
  error?: string;
};

export const ScreenWrapper = ({
  children,
  isLoading,
  error,
}: ScreenWrapperProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsAnimating(true);

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      { iterations: 1 },
    ).start(() => {
      // Animation finished
      setIsAnimating(false);
    });
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (isLoading || isAnimating) {
    return (
      <Animated.View
        style={[styles.wrapper, { transform: [{ rotate: spin }] }]}
      >
        <Text style={styles.loader} accessibilityLabel="loading data">
          ⏳
        </Text>
      </Animated.View>
    );
  }

  if (error) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "center", justifyContent: "center" },
  loader: {
    fontSize: 40,
  },
  error: {
    fontSize: 20,
    color: "#FA7070",
    paddingHorizontal: 32,
  },
});
