import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { loadTodosStateFromLocalStorage } from "../helpers/todoLocalStorage.helper";
import { saveItemsToLocalStorage } from "../repositories/localStorageRepository";
import { TODOS_LOCAL_STORAGE_NAME } from "../constants";

const localStorageMiddleware = (state) => (next) => (action) => {
  const result = next(action);
  saveItemsToLocalStorage(
    state.getState().todos.todos,
    TODOS_LOCAL_STORAGE_NAME
  );
  return result;
};

const persistedState = loadTodosStateFromLocalStorage();

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
