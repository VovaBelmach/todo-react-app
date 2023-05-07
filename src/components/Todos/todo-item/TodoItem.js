import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../../../stores/todosSlice";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const [isCompleted, setCompletition] = useState(props.isDone);

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };

  const onCheckHandler = () => {
    dispatch(
      checkTodo({
        id: props.id,
      })
    );
    setCompletition(!isCompleted);
  };

  return (
    <li onClick={onCheckHandler}>
      <Checkbox
        id={props.id}
        name={props.id}
        isDone={isCompleted}
        isDisabled={false}
      />
      <label>{props.description}</label>
      <button onClick={onDeleteHandler} className={`${styles["delete-btn"]}`}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
