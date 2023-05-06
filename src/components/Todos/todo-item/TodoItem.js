import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../../../stores/todosSlice";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
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
  };

  return (
    <li>
      <Checkbox
        id={props.id}
        name={props.id}
        isDone={props.isDone}
        isDisabled={false}
        onClick={onCheckHandler}
      />
      <label onClick={onCheckHandler}>
        {props.description}
      </label>
      <button onClick={onDeleteHandler} className={`${styles["delete-btn"]}`}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
