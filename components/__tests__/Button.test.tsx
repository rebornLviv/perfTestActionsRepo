import { render, screen } from "@testing-library/react-native";

import { rntlUser } from "../../utils/testUtils";
import { Button } from "../Button";

describe("<Button />", () => {
  it("should render properly", () => {
    render(<Button text="Hello" />);

    expect(screen.getByText("Hello")).toBeOnTheScreen();
  });

  it("user is able to clock button", async () => {
    const onPress = jest.fn();
    render(<Button text="Hello" onPress={onPress} />);

    await rntlUser.press(screen.getByText("Hello"));

    expect(onPress).toHaveBeenCalled();
  });
});
