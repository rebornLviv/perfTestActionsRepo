import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const checkmarkAnimation = require("../assets/checkmark-lottie.json");

const Success = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.info}>Your order has been finished</Text>
      {Platform.OS === "web" ? (
        <DotLottieReact
          style={styles.animation}
          src="../assets/checkmark-lottie.json"
          loop
          autoplay
        />
      ) : (
        <LottieView
          style={styles.animation}
          source={checkmarkAnimation}
          loop
          autoPlay
        />
      )}

      <Link style={styles.link} replace href="/products/list">
        Close
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: "100%",
    height: "30%",
  },
  info: {
    fontSize: 20,
    textAlign: "center",
  },
  link: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Success;
