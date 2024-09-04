import { screen } from "@testing-library/react-native";
import { measureRenders } from "reassure";

import { useCart } from "../../../../store/useCart";
import Items from "../items";

const mockCartState = () => {
  useCart.setState({
    cartItems: Array.from({ length: 100 }).map((_, index) => ({
      id: index + 1,
      price: Number((Math.random() * 1000).toFixed(2)),
      quantity: Math.ceil(Math.random() * 10),
      stock: Math.ceil(Math.random() * 100),
      thumbnail: "https://fake.url/thumbnail.jpg",
      title: Math.random().toString(36).substring(3),
    })),
  });
};

describe("cart items perf tests", () => {
  it("renders 100 items in cart list", async () => {
    mockCartState();

    const scenario = async () => {
      await screen.findAllByLabelText("Cart item", { exact: false });
    };

    await measureRenders(<Items />, { scenario });
  });
});
