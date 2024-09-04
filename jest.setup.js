import "@testing-library/react-native/extend-expect";
import { configure } from "reassure";

import { mockServer } from "./__mocks__/mockServer";

jest.setTimeout(60_000);

beforeAll(() => mockServer.listen());

afterEach(() => {
  mockServer.resetHandlers();

  // Expo Router's renderRouter() enables fake timers every run, so we need to clean up
  jest.useRealTimers();
});

afterAll(() => mockServer.close());

configure({ testingLibrary: "react-native" });
require("react-native-reanimated").setUpTests();

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");

  RN.Animated.loop = () => ({
    start: (callback) => callback?.(),
  });

  return RN;
});
