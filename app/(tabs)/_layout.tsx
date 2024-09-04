import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import { useCart } from "../../store/useCart";

export default function TabLayout() {
  const cartItemsQuantity = useCart((state) => state.cartItems).length;

  return (
    <Tabs>
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="shopping-cart" color={color} />
          ),
          tabBarBadge: cartItemsQuantity > 0 ? cartItemsQuantity : undefined,
          tabBarAccessibilityLabel: `Cart with ${cartItemsQuantity} items`,
        }}
      />
    </Tabs>
  );
}
