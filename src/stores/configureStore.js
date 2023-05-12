import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { loadTodosStateFromLocalStorage } from "../helpers/todoLocalStorage.helper";

const persistedState = loadTodosStateFromLocalStorage();

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});
