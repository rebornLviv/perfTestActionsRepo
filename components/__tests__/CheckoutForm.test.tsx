import { render, screen } from "@testing-library/react-native";

import { rntlUser } from "../../utils/testUtils";
import { CheckoutForm } from "../CheckoutForm";

const onSubmitMock = jest.fn();

describe("<CheckoutForm />", () => {
  it("should render properly", () => {
    render(<CheckoutForm onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText("Name input field")).toBeOnTheScreen();
    expect(screen.getByLabelText("Address input field")).toBeOnTheScreen();
  });

  it("user is able to see validation messages for empty form", async () => {
    render(<CheckoutForm onSubmit={onSubmitMock} />);

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
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it("user is able to send form", async () => {
    render(<CheckoutForm onSubmit={onSubmitMock} />);

    await rntlUser.type(screen.getByLabelText("Name input field"), "John snow");
    await rntlUser.type(
      screen.getByLabelText("Address input field"),
      "Wall on the North, Winterfell.",
    );
    await rntlUser.press(screen.getByText("Order"));

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
