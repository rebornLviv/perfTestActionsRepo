import { render, screen } from "@testing-library/react-native";

import { useCart } from "../../../../store/useCart";
import { rntlUser } from "../../../../utils/testUtils";
import Items from "../items";

const mockCartState = () => {
  useCart.setState({
    cartItems: [
      {
        id: 1,
        price: 549,
        quantity: 3,
        stock: 94,
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        title: "iPhone 9",
      },
    ],
  });
};

describe("<Items/>", () => {
  it("should renders empty state", () => {
    render(<Items />);

    expect(screen.getByText("no data")).toBeOnTheScreen();
  });

  it("User should be able to increase cart value", async () => {
    mockCartState();
    render(<Items />);

    expect(screen.getByText("3")).toBeOnTheScreen();

    await rntlUser.press(screen.getByLabelText("Increase quantity button"));

    expect(screen.getByText("4")).toBeOnTheScreen();
  });

  it("User should be able to decrease cart value", async () => {
    mockCartState();
    render(<Items />);

    expect(screen.getByText("3")).toBeOnTheScreen();

    await rntlUser.press(screen.getByLabelText("Decrease quantity button"));

    expect(screen.getByText("2")).toBeOnTheScreen();
  });

  it("User should be able to remove item", async () => {
    mockCartState();
    render(<Items />);

    expect(screen.getByText("3")).toBeOnTheScreen();

    await rntlUser.press(
      screen.getByLabelText("Remove iPhone 9 from the cart"),
    );

    expect(screen.getByText("no data")).toBeOnTheScreen();
  });
});
