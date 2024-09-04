import { render, screen } from "@testing-library/react-native";

import { AddToCartButton } from "../AddToCartButton";
import { measureRenders } from "reassure";
import { rntlUser } from "../../utils/testUtils";

const cartItemMocked = {
  title: "Product",
  price: 20.0,
  thumbnail: "fake/url",
  stock: 2,
  id: 121,
};


describe("<AddToCartButton />", () => {
  it("renders  items in cart list", async () => {
    const scenario = async () => {
      for (let index = 0; index < 10; index++) {
        await rntlUser.press(  screen.getByLabelText("Add to cart"))
      }
   };
     
     await measureRenders( <AddToCartButton cartItem={cartItemMocked} />,{scenario} )
  });
});
