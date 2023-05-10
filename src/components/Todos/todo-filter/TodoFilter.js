import Button from "../../UI/Button/Button";
import styles from "./TodoFilter.module.css";

const TodoFilter = (props) => {
  const onClickHandler = (event) => {
    props.onFilterHandler(event.target.value);
  };

  return (
    <>
      <ul className={styles['todo-filter']}>
        <li>
          <Button
            onClick={onClickHandler}
            value="All"
          >
            All
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value="Active"
          >
            Active
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value="Completed"
          >
            Completed
          </Button>
        </li>
      </ul>
    </>
  );
};

export default TodoFilter;
