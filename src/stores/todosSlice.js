import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [],
  filter: "",
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
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    checkTodo: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].isDone = true;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, setFilter } = todosSlice.actions;

export default todosSlice.reducer;

export const filteredTodosSelector = (state) => {
  const { todos, filter } = state.todos;
  switch (filter) {
    case "Active":
      return todos.filter((todo) => todo.isDone !== true);
    case "Completed":
      return todos.filter((todo) => todo.isDone === true);
    default:
      return todos;
  }
};
