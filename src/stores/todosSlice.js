import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid(),
        description: action.payload.description,
        isDone: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    checkTodo: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state[index].idDone = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todosSlice.actions;

export default todosSlice.reducer;
