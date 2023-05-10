import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "./TodoFooter";

describe("TodoFooter component", () => {
  const props = {
    countTodos: 3,
    onFilterHandler: jest.fn(),
    onDeleteCompletedHandler: jest.fn(),
  };

  it("should render with countTodos prop", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Assert
    const spanElement = screen.getByText(`${props.countTodos} todo left`);
    expect(spanElement).toBeInTheDocument();
  });

  it("should render with 'All done!' when countTodos is 0", () => {
    // Arrange
    render(<TodoFooter {...props} countTodos={0} />);

    // Assert
    const spanElement = screen.getByText("All done!");
    expect(spanElement).toBeInTheDocument();
  });

  it("should call onFilterHandler function when TodoFilter component triggers onFilterHandler event", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Act
    fireEvent.click(
      screen.getByRole("button", {
        name: "All",
      }),
      { target: { value: "All" } }
    );

    // Assert
    expect(props.onFilterHandler).toHaveBeenCalled();
  });

  it("should call onDeleteCompletedHandler function when 'Clear completed' button is clicked", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Act
    const clearCompletedButton = screen.getByText("Clear completed");
    fireEvent.click(clearCompletedButton);

    // Assert
    expect(props.onDeleteCompletedHandler).toHaveBeenCalled();
  });
});
