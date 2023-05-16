import { saveItemsToLocalStorage } from "../../repositories/localStorageRepository";
import { TODOS_LOCAL_STORAGE_NAME } from "../../constants";

export const localStorageMiddleware = (state) => (next) => (action) => {
    const result = next(action);
    saveItemsToLocalStorage(
      state.getState().todos.todos,
      TODOS_LOCAL_STORAGE_NAME
    );
    return result;
  };