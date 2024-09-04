import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import { View } from "react-native";
import { SWRConfig } from "swr";

import { apiMocks } from "../../../../__mocks__/apiMocks";
import { rntlUser } from "../../../../utils/testUtils";
import List from "../list";

// needed for react-native-element-dropdown component, allows to find element in opened list
jest.spyOn(View.prototype, "measureInWindow").mockImplementation((cb) => {
  cb(18, 113, 357, 50);
});

describe("<List /> - Products list screen", () => {
  it("should render properly", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <List />
      </SWRConfig>,
    );

    await screen.findAllByLabelText("Product:", {
      exact: false,
    });

    expect(
      screen.getByText(apiMocks.productsAllPage1.products[0].title),
    ).toBeOnTheScreen();
  });

  it("user is able to got to the next and page", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <List />
      </SWRConfig>,
    );

    // wait for render screen
    await screen.findAllByLabelText("Product:", {
      exact: false,
    });

    // go to the next page
    await rntlUser.press(screen.getByLabelText("Next page"));

    expect(
      screen.getByText(apiMocks.productsAllPage2.products[0].title),
    ).toBeOnTheScreen();

    // go to the previous page
    await rntlUser.press(screen.getByLabelText("Previous page"));

    expect(
      screen.getByText(apiMocks.productsAllPage1.products[0].title),
    ).toBeOnTheScreen();
  });

  it("should render chosen category", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <List />
      </SWRConfig>,
    );

    await rntlUser.press(await screen.findByText("Choose category"));
    await rntlUser.press(await screen.findByText("Laptops"));

    expect(
      screen.getByText(apiMocks.productsCategoryLaptops.products[0].title),
    ).toBeOnTheScreen();
  });

  it("should wait for loading animation to end", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <List />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByLabelText("loading data"),
    );

    const firstProductTitle = screen.getByText(
      apiMocks.productsAllPage1.products[0].title,
    );

    expect(firstProductTitle).toBeOnTheScreen();
  });
});
