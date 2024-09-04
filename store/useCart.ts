import { create } from "zustand";

import { Product } from "../api/apiTypes";

export type CartItem = Pick<
  Product,
  "id" | "thumbnail" | "stock" | "title" | "price"
> & {
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  addOrEditCartItem: (item: CartItem) => void;
  removeCartItem: (id: CartItem["id"]) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  cartItems: [],
  addOrEditCartItem: (item: CartItem) =>
    set((state) => {
      const existedItemIndex = state.cartItems.findIndex(
        ({ id }) => id === item.id,
      );
      const tempItems = [...state.cartItems];

      if (existedItemIndex > -1) {
        tempItems[existedItemIndex] = item;

        return { cartItems: tempItems };
      }

      return { cartItems: [...state.cartItems, item] };
    }),
  removeCartItem: (id: CartItem["id"]) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
