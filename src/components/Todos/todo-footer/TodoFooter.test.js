import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "./TodoFooter";
import {
  TODO_FOOTER_ALL_DONE_TEXT,
  TODO_FOOTER_NUMBER_TODO_LEFT_TEXT,
  TODO_FOOTER_CLEAR_COMPLETED_BUTTON_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
} from "../../../constants";

describe("TodoFooter component", () => {
  const props = {
    countTodos: 3,
    onFilterHandler: jest.fn(),
    onDeleteCompletedHandler: jest.fn(),
  };

  it("should match snapshot with todo count", () => {
    // Arrange
    const { container } = render(<TodoFooter countTodos={props.countTodos} />);
    
    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with no todos', () => {
    //Arrange
    const { container } = render(<TodoFooter countTodos={0} />);
    
    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with countTodos prop", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Assert
    const spanElement = screen.getByText(
      `${props.countTodos} ${TODO_FOOTER_NUMBER_TODO_LEFT_TEXT}`
    );
    expect(spanElement).toBeInTheDocument();
  });

  it("should render with 'All done!' when countTodos is 0", () => {
    // Arrange
    render(<TodoFooter {...props} countTodos={0} />);

    // Assert
    const spanElement = screen.getByText(TODO_FOOTER_ALL_DONE_TEXT);
    expect(spanElement).toBeInTheDocument();
  });

  it("should call onFilterHandler function when TodoFilter component triggers onFilterHandler event", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Act
    fireEvent.click(
      screen.getByRole("button", {
        name: TODO_FILTER_ALL_BUTTON_NAME,
      }),
      { target: { value: TODO_FILTER_ALL_BUTTON_NAME } }
    );

    // Assert
    expect(props.onFilterHandler).toHaveBeenCalled();
  });

  it("should call onDeleteCompletedHandler function when 'Clear completed' button is clicked", () => {
    // Arrange
    render(<TodoFooter {...props} />);

    // Act
    const clearCompletedButton = screen.getByText(
      TODO_FOOTER_CLEAR_COMPLETED_BUTTON_NAME
    );
    fireEvent.click(clearCompletedButton);

    // Assert
    expect(props.onDeleteCompletedHandler).toHaveBeenCalled();
  });
});
