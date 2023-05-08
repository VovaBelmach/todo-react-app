import Button from "../../UI/Button/Button";
import styles from "./TodoFilter.module.css";

const TodoFilter = (props) => {
  const onClickHandler = (event) => {
    props.onFilterHandler(event.target.value);
  };

  return (
    <>
      <ul className={styles.todoFilters}>
        <li>
          <Button
            onClick={onClickHandler}
            value="All"
            className="todo-filter all"
          >
            All
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value="Active"
            className="todo-filter all"
          >
            Active
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value="Completed"
            className="todo-filter all"
          >
            Completed
          </Button>
        </li>
      </ul>
    </>
  );
};

export default TodoFilter;
