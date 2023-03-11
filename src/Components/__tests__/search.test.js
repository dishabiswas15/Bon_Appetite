import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../../Utils/store";
import Body from "../Body";
import { render } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  //Fetch basically returns Promise
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
  
});
