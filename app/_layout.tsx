import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";

import { theme } from "../utils/theme";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "products/list",
};

export default function AppLayout() {
  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="success"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
