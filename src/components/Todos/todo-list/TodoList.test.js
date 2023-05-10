import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "./TodoList";

const mockStore = configureStore([]);

describe("TodoList component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        todos: [
          {
            id: 1,
            description: "Learn React",
            isCompleted: false,
          },
          {
            id: 2,
            description: "Write unit tests",
            isCompleted: true,
          },
        ],
        filter: "all",
      },
    });
  });

  it("should render a list of todo items", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const todoItems = screen.getAllByRole("todo-item");
    expect(todoItems.length).toBe(2);
  });

  it("should render a message when no todos are present", () => {
    store = mockStore({
      todos: {
        todos: [],
        filter: "all",
      },
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const message = screen.getByText(
      "All todos completed! Add a todo and it will be displayed here."
    );

    expect(message).toBeInTheDocument();
  });

  it("dispatches deleteTodo action when delete completed button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const deleteButton = screen.getAllByRole("button", {
      name: "X",
    });
    deleteButton[0].click();

    expect(store.getActions()).toEqual([
      {
        type: "todos/deleteTodo",
        payload: {
          id: 1,
        },
      },
    ]);
  });
});
