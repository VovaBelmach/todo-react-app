import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores/configureStore";
import { HEADER_TEXT, FOOTER_TEXT } from "./constants";

describe("App", () => {
  it("should render the header and footer text", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(HEADER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(FOOTER_TEXT)).toBeInTheDocument();
  });

  it("should render the correct CSS classes", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const appHeader = screen.getByTestId("app-header");
    const app = screen.getByTestId("app");
    const appContent = screen.getByTestId("app-content");
    const title = screen.getByTestId("title");
    const footer = screen.getByTestId("footer");

    expect(appHeader).toHaveClass("app-header");
    expect(app).toHaveClass("app");
    expect(appContent).toHaveClass("app-content");
    expect(title).toHaveClass("title");
    expect(footer).toHaveClass("footer");
  });
});
