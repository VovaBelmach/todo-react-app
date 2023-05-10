import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../../stores/todosSlice";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Button from "../../UI/Button/Button";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [isCompleted, setCompletition] = useState(props.isCompleted);
  const dispatch = useDispatch();
  const role = "todo-item";

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    dispatch(
      deleteTodo({
        id: props.id,
      })
    );
  };

  const onCompleteHandler = () => {
    dispatch(
      completeTodo({
        id: props.id,
      })
    );
    setCompletition(!isCompleted);
  };

  return (
    <li
      role={role}
      key={props.id}
      draggable
      onDragStart={(event) => props.onDragStartHandle(event, props.index)}
      onDragOver={props.onDragOverHandle}
      onDrop={(event) => props.onDropHandle(event, props.index)}
      onDragEnd={props.onDragEndHandle}
      onClick={onCompleteHandler}
      style={{ opacity: props.draggedIndex === props.index ? 0.5 : 1 }}
    >
      <Checkbox
        id={props.id}
        name={props.id}
        isCompleted={isCompleted}
        isDisabled={false}
      />
      <label>{props.description}</label>
      <Button className={styles["delete-btn"]} onClick={onDeleteHandler}>
        X
      </Button>
    </li>
  );
};

export default TodoItem;
