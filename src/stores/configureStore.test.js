import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { loadTodosStateFromLocalStorage } from "./helpers/todoLocalStorage.helper";
import { saveItemsToLocalStorage } from "../repositories/localStorageRepository";
import {
  TODOS_LOCAL_STORAGE_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
} from "../constants";

describe("configureStore", () => {
  test("should create a store with the correct reducer", () => {
    // Arrange
    const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
    });

    // Assert
    expect(store.getState().todos).toEqual({
      todos: [],
      filterValue: TODO_FILTER_ALL_BUTTON_NAME,
    });
  });

  test("should load state from local storage when available", () => {
    // Arrange
    const storedState = {
      todos: {
        todos: [
          {
            id: "123",
            description: "Buy groceries",
            isCompleted: false,
          },
        ],
        filterValue: TODO_FILTER_ALL_BUTTON_NAME,
      },
    };

    saveItemsToLocalStorage(storedState.todos.todos, TODOS_LOCAL_STORAGE_NAME);

    const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
      preloadedState: loadTodosStateFromLocalStorage(),
    });

    // Assert
    expect(store.getState().todos).toEqual(storedState.todos);
    localStorage.removeItem(TODOS_LOCAL_STORAGE_NAME);
  });
});
