import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../stores/todosSlice";
import Card from "../../UI/Card/Card";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
  const todoInputRef = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;

    if (enteredTodo.trim().length === 0) {
      setError(
        "Oops! You cannot create an empty todo. Please provide 'What should be done?' in the section above."
      );
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
    <Card className={styles['todo-input']}>
      <form onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} />
        <input
          type="text"
          placeholder="What should be done?"
          ref={todoInputRef}
          onChange={onChangeHandler}
        />
      </form>
      <span className={styles['error-message']}>{error}</span>
    </Card>
  );
};

export default TodoInput;
