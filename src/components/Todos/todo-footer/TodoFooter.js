import Button from "../../UI/Button/Button";
import TodoFilter from "../todo-filter/TodoFilter";

import styles from "./TodoFooter.module.css";

const TodoFooter = (props) => {
  return (
    <>
      <footer className={styles.todoFooter}>
        <span>{props.countTodos} item left</span>
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
