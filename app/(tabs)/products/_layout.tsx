import { Stack } from "expo-router";

export default function ProductsRouter() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Products" }} />
      <Stack.Screen name="[productId]" />
    </Stack>
  );
}
