import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";
import TodoFilter from "../todo-filter/TodoFilter";
import styles from "./TodoFooter.module.css";
import { deleteAllComlpetedTodos } from "../../../stores/todosSlice";
import {
  TODO_FOOTER_ALL_DONE_TEXT,
  TODO_FOOTER_NUMBER_TODO_LEFT_TEXT,
  TODO_FOOTER_CLEAR_COMPLETED_BUTTON_NAME,
} from "../../../constants";

const TodoFooter = (props) => {
  const dispatch = useDispatch();

  const todoCount = props.countTodos;
  const spanContent =
    todoCount === 0
      ? TODO_FOOTER_ALL_DONE_TEXT
      : `${todoCount} ${TODO_FOOTER_NUMBER_TODO_LEFT_TEXT}`;

  const onDeleteCompletedHandler = () => {
    dispatch(deleteAllComlpetedTodos());
  }

  return (
    <>
      <footer className={styles["todo-footer"]}>
        <span>{spanContent}</span>
        <TodoFilter onFilterHandler={props.onFilterHandler} />
        <Button
          onClick={onDeleteCompletedHandler}
          className={styles["todo-clear-completed"]}
          value={TODO_FOOTER_CLEAR_COMPLETED_BUTTON_NAME}
        >
          {TODO_FOOTER_CLEAR_COMPLETED_BUTTON_NAME}
        </Button>
      </footer>
    </>
  );
};

TodoFooter.propTypes = {
  countTodos: PropTypes.number.isRequired,
  onFilterHandler: PropTypes.func
};

export default TodoFooter;
