import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getItemsFromLocalStorage } from "../repositories/localStorageRepository";
import {
  TODOS_LOCAL_STORAGE_NAME,
  TODO_FILTER_ALL_BUTTON_NAME,
  TODO_FILTER_ACTIVE_BUTTON_NAME,
  TODO_FILTER_COMPLITED_BUTTON_NAME,
} from "../constants";

let initialTodos = [];

const storedTodos = getItemsFromLocalStorage(TODOS_LOCAL_STORAGE_NAME);

if (storedTodos) {
  initialTodos = JSON.parse(storedTodos);
}

const initialState = {
  items: initialTodos,
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
      state.items.push(newTodo);
    },
    completeTodo: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index].isCompleted = !state.items[index].isCompleted;
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((todo) => todo.id !== id);
    },
    deleteAllComlpetedTodos: (state) => {
      state.items = state.items.filter((todo) => !todo.isCompleted)
    },
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
    reorderTodos: (state, action) => {
      let { draggedIndex, droppedIndex, filteredTodos } = action.payload;
      const todos = state.items;

      if (state.filterValue !== TODO_FILTER_ALL_BUTTON_NAME) {
        const graggedTodoId = filteredTodos[draggedIndex].id;
        const droppedTodoId = filteredTodos[droppedIndex].id;

        draggedIndex = todos.findIndex(property => property.id === graggedTodoId);
        droppedIndex = todos.findIndex(property => property.id === droppedTodoId);
      }

      const draggedTodo = state.items[draggedIndex];
      const newTodos = [...state.items];
      newTodos.splice(draggedIndex, 1);
      newTodos.splice(droppedIndex, 0, draggedTodo);
      state.items = newTodos;
    },
  },
});

export const { addTodo, completeTodo, deleteTodo, deleteAllComlpetedTodos, setFilter, reorderTodos } =
  todosSlice.actions;

export default todosSlice.reducer;

export const filteredTodosSelector = (state) => {
  const { items, filterValue } = state.todos;
  switch (filterValue) {
    case TODO_FILTER_ACTIVE_BUTTON_NAME:
      return items.filter((todo) => !todo.isCompleted);
    case TODO_FILTER_COMPLITED_BUTTON_NAME:
      return items.filter((todo) => todo.isCompleted);
    default:
      return items;
  }
};
