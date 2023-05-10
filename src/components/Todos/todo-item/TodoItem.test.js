import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import TodoItem from "./TodoItem";
import { completeTodo, deleteTodo } from "../../../stores/todosSlice";

const mockStore = configureMockStore();
const store = mockStore({});

const props = {
  id: "1",
  index: 0,
  isCompleted: false,
  description: "Test Todo",
  onDragStartHandle: jest.fn(),
  onDragOverHandle: jest.fn(),
  onDropHandle: jest.fn(),
  onDragEndHandle: jest.fn(),
};

describe("TodoItem component", () => {
  it("should render the description and a checkbox", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    // Assert
    expect(screen.getByLabelText(/test todo/i)).toBeInTheDocument();
    expect(screen.getByText(/test todo/i)).toBeInTheDocument();
  });

  it("should complete the todo when the checkbox is clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    // Act
    fireEvent.click(screen.getByLabelText(/test todo/i));

    // Assert
    expect(store.getActions()).toContainEqual(completeTodo({ id: props.id }));
  });

  it("should delete the todo when the delete button is clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    // Act
    fireEvent.click(screen.getByRole("button"));

    //Assert
    expect(store.getActions()).toContainEqual(deleteTodo({ id: props.id }));
  });

  it("should call the onDragStartHandle prop when the item is dragged", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    // Act
    fireEvent.dragStart(screen.getByRole("todo-item"));

    //Assert
    expect(props.onDragStartHandle).toHaveBeenCalled();
  });
});