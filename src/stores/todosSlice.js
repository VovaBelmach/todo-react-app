import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [],
  filterValue: "All",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid(),
        description: action.payload.description,
        isCompleted: false,
      };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      saveTodosToLocalStorage(state.todos);
    },
    completeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
        saveTodosToLocalStorage(state.todos);
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
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, setFilter, reorderTodos } =
  todosSlice.actions;

export default todosSlice.reducer;

export const filteredTodosSelector = (state) => {
  const { todos, filterValue } = state.todos;
  switch (filterValue) {
    case "Active":
      return todos.filter((todo) => todo.isCompleted !== true);
    case "Completed":
      return todos.filter((todo) => todo.isCompleted === true);
    default:
      return todos;
  }
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
