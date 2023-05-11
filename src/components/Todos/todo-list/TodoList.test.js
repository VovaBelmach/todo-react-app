import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "./TodoList";
import {
  TODO_LIST_EMPTY_LIST_MESSAGE,
  TODO_ITEM_DELETE_BUTTON_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
} from "../../../constants";

const mockStore = configureStore([]);

describe("TodoList component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        todos: [
          {
            id: 'a74ba32f-3868-48f9-bb1a-2f8267844fc1',
            description: "Learn React",
            isCompleted: false,
          },
          {
            id: 'c4eb6856-96af-41ef-b497-7424120cbbc4',
            description: "Write unit tests",
            isCompleted: true,
          },
        ],
        filter: TODO_FILTER_ALL_BUTTON_NAME,
      },
    });
  });

  it("should render correctly when there are no filtered todos", () => {
    // Arrange
    store = mockStore({
      todos: {
        todos: [],
        filter: TODO_FILTER_ALL_BUTTON_NAME,
      },
    });
    
    const { container } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Act
    expect(container).toMatchSnapshot();
  });

  it("should render correctly when there are filtered todos", () => {
    // Arrange
    const { container } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Act
    expect(container).toMatchSnapshot();
  });

  it("should render a list of todo items", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Assert
    const todoItems = screen.getAllByRole("todo-item");
    expect(todoItems.length).toBe(2);
  });

  it("should render a message when no todos are present", () => {
    // Arrange
    store = mockStore({
      todos: {
        todos: [],
        filter: TODO_FILTER_ALL_BUTTON_NAME,
      },
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Assert
    const message = screen.getByText(TODO_LIST_EMPTY_LIST_MESSAGE);
    expect(message).toBeInTheDocument();
  });

  it("dispatches deleteTodo action when delete completed button is clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    // Act
    const deleteButton = screen.getAllByRole("button", {
      name: TODO_ITEM_DELETE_BUTTON_NAME,
    });
    deleteButton[0].click();

    // Assert
    expect(store.getActions()).toEqual([
      {
        type: "todos/deleteTodo",
        payload: {
          id: 'a74ba32f-3868-48f9-bb1a-2f8267844fc1',
        },
      },
    ]);
  });
});
