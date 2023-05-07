import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../stores/todosSlice";
import Card from "../../UI/Card/Card";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
  const todoInputRef = useRef();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      addTodo({
        description: todoInputRef.current.value,
      })
    );

    todoInputRef.current.value = "";
  };

  return (
    <Card className={styles.todoInput}>
      <form onSubmit={onSubmitHandler}>
        <Checkbox isDisabled={true} />
        <input
          type="text"
          placeholder="What should be done?"
          ref={todoInputRef}
        />
      </form>
    </Card>
  );
};

export default TodoInput;
