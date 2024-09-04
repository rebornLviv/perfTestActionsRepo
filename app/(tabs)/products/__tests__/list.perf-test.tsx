import { screen } from "@testing-library/react-native";
import { measureRenders } from "reassure";

import List from "../list";
import { rntlUser } from "../../../../utils/testUtils";
import { SWRConfig } from "swr";


describe("list items perf tests", () => {
  it("renders  items in cart list", async () => {

    const scenario = async () => {
       await rntlUser.scrollTo( await screen.findByTestId("products-list", { exact: false }) ,{y:20})
    };
    
    
    await measureRenders( <SWRConfig value={{ provider: () => new Map() }}>
    <List />
  </SWRConfig>, { scenario });
  });
});
