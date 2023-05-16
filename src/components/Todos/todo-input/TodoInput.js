import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../stores/todosSlice";
import Card from "../../UI/Card/Card";
import CustomTodoInput from "../../UI/CustomTodoInput/CustomTodoInput";
import styles from "./TodoInput.module.css";
import {
  TODO_INPUT_EMPTY_ERROR_MESSAGE,
  TODO_INPUT_PLACEHOLDER_TEXT,
} from "../../../constants";

const TodoInput = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const todoInputName = "todo-input";

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setError(TODO_INPUT_EMPTY_ERROR_MESSAGE);
      return;
    }

    dispatch(
      addTodo({
        description: enteredTodo,
      })
    );

    setEnteredTodo("");
  };

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
    setError("");
  };

  return (
    <Card className={styles["todo-input"]}>
      <form aria-label="form" onSubmit={onSubmitHandler}>
        <CustomTodoInput
          name={todoInputName}
          value={enteredTodo}
          placeholder={TODO_INPUT_PLACEHOLDER_TEXT}
          onChangeHandler={todoChangeHandler}
        />
      </form>
      <span className={styles["error-message"]}>{error}</span>
    </Card>
  );
};

export default TodoInput;
