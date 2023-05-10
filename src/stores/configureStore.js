import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { getItemsFromLocalStorage } from "../repositories/localStorageRepository";
import {
  TODOS_LOCAL_STORAGE_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
} from "../constants";

export const loadTodosStateFromLocalStorage = () => {
  const storedTodos = getItemsFromLocalStorage(TODOS_LOCAL_STORAGE_NAME);
  if (storedTodos) {
    return {
      todos: {
        todos: JSON.parse(storedTodos),
        filterValue: TODO_FILTER_ALL_BUTTON_NAME,
      },
    };
  }
  return undefined;
};

const persistedState = loadTodosStateFromLocalStorage();

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});
