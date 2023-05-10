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
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    expect(screen.getByLabelText(/test todo/i)).toBeInTheDocument();
    expect(screen.getByText(/test todo/i)).toBeInTheDocument();
  });

  it("should complete the todo when the checkbox is clicked", () => {
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    fireEvent.click(screen.getByLabelText(/test todo/i));
    expect(store.getActions()).toContainEqual(completeTodo({ id: props.id }));
  });

  it("should delete the todo when the delete button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(store.getActions()).toContainEqual(deleteTodo({ id: props.id }));
  });

  it("should call the onDragStartHandle prop when the item is dragged", () => {
    render(
      <Provider store={store}>
        <TodoItem {...props} />
      </Provider>
    );

    fireEvent.dragStart(screen.getByRole("todo-item"));
    expect(props.onDragStartHandle).toHaveBeenCalled();
  });
});