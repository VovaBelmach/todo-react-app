import { saveItemsToLocalStorage } from "../../repositories/localStorageRepository";
import { TODOS_LOCAL_STORAGE_NAME } from "../../constants";

export const localStorageMiddleware = (state) => (next) => (action) => {
    const result = next(action);
    const { todos } = state.getState()
    saveItemsToLocalStorage(
      TODOS_LOCAL_STORAGE_NAME,
      todos.items
    );
    return result;
  };