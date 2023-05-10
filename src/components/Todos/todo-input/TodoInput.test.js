import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../stores/configureStore";
import TodoInput from "./TodoInput";

describe("TodoInput component", () => {
  it("should render the TodoInput component", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText("What should be done?");
    expect(inputElement).toBeInTheDocument();
  });

  it("should show an error message when submitting an empty todo", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);
    const errorMessage = screen.getByText(
      "Oops! You cannot create an empty todo. Please provide 'What should be done?' in the section above."
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("should dispatch an action when submitting a non-empty todo", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText("What should be done?");
    const formElement = screen.getByRole("form");
    const enteredTodo = "Test todo";
    fireEvent.change(inputElement, { target: { value: enteredTodo } });
    fireEvent.submit(formElement);
    const state = store.getState();
    const todos = state.todos.todos;
    
    expect(todos).toHaveLength(1);
    expect(todos[0].description).toBe(enteredTodo);
  });
});
