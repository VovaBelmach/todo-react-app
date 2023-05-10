import { render, screen, fireEvent } from "@testing-library/react";
import TodoFilter from "./TodoFilter";

describe("TodoFilter", () => {
  test("renders all filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const allButton = screen.getByText("All");
    expect(allButton).toBeInTheDocument();
  });

  test("renders active filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const activeButton = screen.getByText("Active");
    expect(activeButton).toBeInTheDocument();
  });

  test("renders completed filter button", () => {
    // Arrange
    render(<TodoFilter />);

    // Assert
    const completedButton = screen.getByText("Completed");
    expect(completedButton).toBeInTheDocument();
  });

  test("calls onFilterHandler with correct value when All button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);
    
    // Act
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith("All");
  });

  test("calls onFilterHandler with correct value when Active button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);
    
    // Act
    const activeButton = screen.getByText("Active");
    fireEvent.click(activeButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith("Active");
  });

  test("calls onFilterHandler with correct value when Completed button is clicked", () => {
    // Arrange
    const onFilterHandler = jest.fn();
    render(<TodoFilter onFilterHandler={onFilterHandler} />);
    // Act
    const completedButton = screen.getByText("Completed");
    fireEvent.click(completedButton);

    // Assert
    expect(onFilterHandler).toHaveBeenCalledWith("Completed");
  });
});
