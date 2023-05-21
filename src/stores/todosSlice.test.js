import { configureStore } from "@reduxjs/toolkit";
import todosReducer, {
  addTodo,
  completeTodo,
  deleteTodo,
  reorderTodos,
  setFilter,
  filteredTodosSelector,
} from "./todosSlice";
import {
  TODO_FILTER_ALL_BUTTON_NAME,
  TODO_FILTER_ACTIVE_BUTTON_NAME,
} from "../constants";

const mockTodo = {
  id: "123",
  description: "mock todo",
  isCompleted: false,
};

const setup = (
  initialState = { items: [], filterValue: TODO_FILTER_ALL_BUTTON_NAME }
) => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: initialState,
    },
  });
};

describe("todosSlice", () => {
  it("should add a new todo", () => {
    // Arrange
    const store = setup();

    // Act
    store.dispatch(
      addTodo({
        description: "New todo",
      })
    );
    const items = filteredTodosSelector(store.getState());

    // Assert
    expect(items).toHaveLength(1);
    expect(items[0].description).toEqual("New todo");
  });

  it("should mark a todo as complete", () => {
    // Arrange
    const store = setup({
      items: [mockTodo],
    });

    // Act
    store.dispatch(
      completeTodo({
        id: mockTodo.id,
      })
    );
    const items = filteredTodosSelector(store.getState());

    // Assert
    expect(items[0].isCompleted).toBe(true);
  });

  it("should delete a todo", () => {
    // Arrange
    const store = setup({
      items: [mockTodo],
    });

    // Act
    store.dispatch(
      deleteTodo({
        id: mockTodo.id,
      })
    );
    const items = filteredTodosSelector(store.getState());

    // Assert
    expect(items).toHaveLength(0);
  });

  it("should set the filter", () => {
    // Arrange
    const store = setup();

    // Act
    store.dispatch(setFilter(TODO_FILTER_ACTIVE_BUTTON_NAME));

    // Assert
    const filterValue = store.getState().todos.filterValue;
    expect(filterValue).toEqual(TODO_FILTER_ACTIVE_BUTTON_NAME);
  });

  it("should reorder todos", () => {
    // Arrange
    const mockTodo2 = {
      id: "456",
      description: "mock todo 2",
      isCompleted: false,
    };
    const store = setup({
      items: [mockTodo, mockTodo2],
    });

    // Act
    store.dispatch(setFilter(TODO_FILTER_ALL_BUTTON_NAME));
    store.dispatch(
      reorderTodos({
        draggedIndex: 0,
        droppedIndex: 1,
      })
    );
    const items = filteredTodosSelector(store.getState());

    // Assert
    expect(items[0].id).toEqual("456");
    expect(items[1].id).toEqual("123");
  });
});
