import { Stack } from "expo-router";

export default function CartRouter() {
  return (
    <Stack>
      <Stack.Screen name="items" options={{ title: "Cart" }} />
      <Stack.Screen name="checkout" options={{ title: "Checkout" }} />
    </Stack>
  );
}
