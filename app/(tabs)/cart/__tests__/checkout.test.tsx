import { render, screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";

import { rntlUser } from "../../../../utils/testUtils";
import Success from "../../../success";
import Checkout from "../checkout";

jest.mock("@lottiefiles/dotlottie-react", () => null);

describe("<Checkout />", () => {
  it("should render properly", () => {
    render(<Checkout />);

    expect(screen.getByText("Order")).toBeOnTheScreen();
  });

  it("user should be able to see validation errors", async () => {
    render(<Checkout />);

    await rntlUser.press(screen.getByText("Order"));

    expect(
      screen.getByText(
        "Your name should have at least 2 and maximum 100 characters",
      ),
    ).toBeOnTheScreen();
    expect(
      screen.getByText(
        "Your address should have at least 20 and maximum 500 characters",
      ),
    ).toBeOnTheScreen();
  });

  it("user should be able do send the form", async () => {
    renderRouter(
      {
        "(tabs)/cart/checkout": Checkout,
        "/success": Success,
      },
      { initialUrl: "(tabs)/cart/checkout" },
    );

    await rntlUser.type(
      screen.getByLabelText("Name input field"),
      "Bruce Wayne ",
    );
    await rntlUser.type(
      screen.getByLabelText("Address input field"),
      "Biggest Houst in the  Gotham City ",
    );
    await rntlUser.press(screen.getByText("Order"));

    expect(screen.getByText("Your order has been finished")).toBeOnTheScreen();
  });
});
