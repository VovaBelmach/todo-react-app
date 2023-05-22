import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import { localStorageMiddleware } from "./middleware/localStorageRepositoryMiddleware"

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
