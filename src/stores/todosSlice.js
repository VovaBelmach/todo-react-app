import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  TODOS_LOCAL_STORAGE_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
  TODO_FILTER_ACTIVE_BUTTON_NAME,
  TODO_FILTER_COMPLITED_BUTTON_NAME,
} from "../constants";

const initialState = {
  todos: [],
  filterValue: TODO_FILTER_ALL_BUTTON_NAME,
};

export const todosSlice = createSlice({
  name: TODOS_LOCAL_STORAGE_NAME,
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid(),
        description: action.payload.description,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    completeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
      }
    },
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
    reorderTodos: (state, action) => {
      const { draggedIndex, droppedIndex } = action.payload;
      const draggedTodo = state.todos[draggedIndex];
      const newTodos = [...state.todos];
      newTodos.splice(draggedIndex, 1);
      newTodos.splice(droppedIndex, 0, draggedTodo);
      state.todos = newTodos;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, setFilter, reorderTodos } =
  todosSlice.actions;

export default todosSlice.reducer;

export const filteredTodosSelector = (state) => {
  const { todos, filterValue } = state.todos;
  switch (filterValue) {
    case TODO_FILTER_ACTIVE_BUTTON_NAME:
      return todos.filter((todo) => !todo.isCompleted);
    case TODO_FILTER_COMPLITED_BUTTON_NAME:
      return todos.filter((todo) => todo.isCompleted);
    default:
      return todos;
  }
};
