import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../../stores/todosSlice";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Button from "../../UI/Button/Button";
import styles from "./TodoItem.module.css";
import { TODO_ITEM_DELETE_BUTTON_NAME } from "../../../constants";

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

  const onCompleteHandler = (event) => {
    event.stopPropagation();
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
      style={{ opacity: props.draggedIndex === props.index ? 0.5 : 1 }}
    >
      <Checkbox
        id={props.id}
        name={props.id}
        isCompleted={isCompleted}
        isDisabled={false}
        onClick={onCompleteHandler}
      />
      <label htmlFor={props.id}>{props.description}</label>
      <Button className={styles["delete-btn"]} onClick={onDeleteHandler}>
        {TODO_ITEM_DELETE_BUTTON_NAME}
      </Button>
    </li>
  );
};

export default TodoItem;
