import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../stores/todosSlice";
import Card from "../../UI/Card/Card";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoInput.module.css";
import {
  TODO_INPUT_EMPTY_ERROR_MESSAGE,
  TODO_INPUT_PLACEHOLDER_TEXT,
} from "../../../constants";

const TodoInput = () => {
  const todoInputRef = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;

    if (enteredTodo.trim().length === 0) {
      setError(TODO_INPUT_EMPTY_ERROR_MESSAGE);
      return;
    }

    dispatch(
      addTodo({
        description: enteredTodo,
      })
    );

    todoInputRef.current.value = "";
  };

  const onChangeHandler = () => {
    setError("");
  };

  return (
    <Card className={styles["todo-input"]}>
      <form aria-label="form" onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} />
        <input
          type="text"
          placeholder={TODO_INPUT_PLACEHOLDER_TEXT}
          ref={todoInputRef}
          onChange={onChangeHandler}
        />
      </form>
      <span className={styles["error-message"]}>{error}</span>
    </Card>
  );
};

export default TodoInput;
