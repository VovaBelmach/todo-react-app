import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/use-input";
import { addTodo } from "../../../stores/todosSlice";
import Card from "../../UI/Card/Card";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoInput.module.css";
import {
  TODO_INPUT_EMPTY_ERROR_MESSAGE,
  TODO_INPUT_PLACEHOLDER_TEXT,
} from "../../../constants";

const TodoInput = () => {
  const {
    value: enteredTodo,
    isValid: enteredTodoIsValid,
    hasError: todoInputHasError,
    valueChangeHandler: todoChangeHandler,
    inputBlurHandler: todoBlurHandler,
    reset: resetTodoInput,
  } = useInput((value) => value.trim() !== "");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredTodoIsValid) {
      return;
    }

    dispatch(
      addTodo({
        description: enteredTodo,
      })
    );

    resetTodoInput();
  };

  return (
    <Card className={styles["todo-input"]}>
      <form aria-label="form" onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} />
        <input
          type="text"
          name="todo-input"
          value={enteredTodo}
          placeholder={TODO_INPUT_PLACEHOLDER_TEXT}
          onChange={todoChangeHandler}
          onBlur={todoBlurHandler}
        />
      </form>
      {todoInputHasError && (
        <span className={styles["error-message"]}>
          {TODO_INPUT_EMPTY_ERROR_MESSAGE}
        </span>
      )}
    </Card>
  );
};

export default TodoInput;
