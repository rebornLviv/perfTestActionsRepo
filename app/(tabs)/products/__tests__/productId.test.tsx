import { screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { SWRConfig } from "swr";

import { apiMocks } from "../../../../__mocks__/apiMocks";
import { rntlUser } from "../../../../utils/testUtils";
import SingleProduct from "../[productId]";

const Wrapper = () => (
  <SWRConfig value={{ provider: () => new Map() }}>
    <SingleProduct />
  </SWRConfig>
);

describe("<SingleProduct />", () => {
  it("should render correctly", async () => {
    renderRouter(
      { "(tabs)/products/[productId]": Wrapper },
      { initialUrl: "products/1" },
    );

    const description = await screen.findByText(apiMocks.products1.description);

    expect(description).toBeOnTheScreen();
  });

  it("should be able to add an item to the cart", async () => {
    renderRouter(undefined, { initialUrl: "products/1" });

    // check if the product is displayed
    const description = await screen.findByText(apiMocks.products1.description);
    expect(description).toBeOnTheScreen();

    // cart should be empty
    expect(screen.getByLabelText("Cart with 0 items")).toBeOnTheScreen();

    // add product to the cart
    const addToCartButton = screen.getByLabelText("Add to cart");
    await rntlUser.press(addToCartButton);

    // check if product was added
    const numberOfCartItems = screen.getByLabelText("Cart with 1 items");
    expect(numberOfCartItems).toBeOnTheScreen();
  });
});
