import { render, screen } from "@testing-library/react-native";

import { AddToCartButton } from "../AddToCartButton";

const cartItemMocked = {
  title: "Product",
  price: 20.0,
  thumbnail: "fake/url",
  stock: 2,
  id: 121,
};

describe("<AddToCartButton />", () => {
  it("should display correctly", () => {
    render(<AddToCartButton cartItem={cartItemMocked} />);

    expect(screen.getByLabelText("Add to cart")).toBeOnTheScreen();
  });

  it("component is not visible when is out of stock", () => {
    render(<AddToCartButton cartItem={{ ...cartItemMocked, stock: 0 }} />);

    expect(screen.queryByLabelText("Add to cart")).toBeNull();
  });
});
