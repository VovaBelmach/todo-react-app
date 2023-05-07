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
        isDone: false,
      };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      saveTodosToLocalStorage(state.todos);
    },
    checkTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].isDone = !state.todos[index].isDone;
        saveTodosToLocalStorage(state.todos);
      }
    },
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, setFilter } = todosSlice.actions;

export default todosSlice.reducer;

export const filteredTodosSelector = (state) => {
  const { todos, filterValue } = state.todos;
  switch (filterValue) {
    case "Active":
      return todos.filter((todo) => todo.isDone !== true);
    case "Completed":
      return todos.filter((todo) => todo.isDone === true);
    default:
      return todos;
  }
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};