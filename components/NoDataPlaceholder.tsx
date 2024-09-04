import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const NoDataPlaceholder = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.icon}>¯\_(ツ)_/¯</Text>
      <Text>no data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  icon: { fontSize: 40 },
});
