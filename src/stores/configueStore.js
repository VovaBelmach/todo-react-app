import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { getItemsFromLocalStorage } from "../repositories/localStorageRepository";
import { TODOS_LOCAL_STORAGE_NAME } from "./constants";

const loadStateFromLocalStorage = () => {
  const storedTodos = getItemsFromLocalStorage(TODOS_LOCAL_STORAGE_NAME);
  if (storedTodos) {
    return {
      todos: {
        todos: JSON.parse(storedTodos),
        filterValue: "All",
      },
    };
  }
  return undefined;
};

const persistedState = loadStateFromLocalStorage();

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});
