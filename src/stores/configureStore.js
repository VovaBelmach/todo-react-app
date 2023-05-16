import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { loadTodosStateFromLocalStorage } from "./helpers/todoLocalStorage.helper";
import { localStorageMiddleware } from "./middleware/localStorageRepositoryMiddleware"

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: loadTodosStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
