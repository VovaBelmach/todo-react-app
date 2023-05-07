import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";

const loadStateFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
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
  preloadedState: persistedState
});