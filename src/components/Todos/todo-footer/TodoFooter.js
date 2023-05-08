import Button from "../../UI/Button/Button";
import TodoFilter from "../todo-filter/TodoFilter";

import styles from "./TodoFooter.module.css";

const TodoFooter = (props) => {
  const todoCount = props.countTodos;
  const spanContent = todoCount === 0 ? "All done!" : `${todoCount} todo left`;

  return (
    <>
      <footer className={`${styles["todo-footer"]}`}>
        <span>{spanContent}</span>
        <TodoFilter onFilterHandler={props.onFilterHandler} />
        <Button
          onClick={props.onDeleteCompletedHandler}
          className={`${styles["todo-clear-completed"]}`}
        >
          Clear completed
        </Button>
      </footer>
    </>
  );
};

export default TodoFooter;
