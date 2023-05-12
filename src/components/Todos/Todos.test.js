import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../stores/configureStore";
import Todos from "./Todos";

describe("Todos", () => {
  it("should renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    // Act
    expect(container).toMatchSnapshot();
  });
});
