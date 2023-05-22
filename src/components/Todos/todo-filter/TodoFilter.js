import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";
import styles from "./TodoFilter.module.css";
import {
  TODO_FILTER_ALL_BUTTON_NAME,
  TODO_FILTER_ACTIVE_BUTTON_NAME,
  TODO_FILTER_COMPLITED_BUTTON_NAME,
} from "../../../constants";

const TodoFilter = (props) => {
  const [selectedButton, setSelectedButton] = useState(
    TODO_FILTER_ALL_BUTTON_NAME
  );

  const onClickHandler = (event) => {
    setSelectedButton(event.target.value);
    props.onFilterHandler(event.target.value);
  };

  return (
    <>
      <ul className={styles["todo-filter"]}>
        <li>
          <Button
            onClick={onClickHandler}
            value={TODO_FILTER_ALL_BUTTON_NAME}
            className={
              selectedButton === TODO_FILTER_ALL_BUTTON_NAME
                ? styles.selected
                : ""
            }
          >
            {TODO_FILTER_ALL_BUTTON_NAME}
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value={TODO_FILTER_ACTIVE_BUTTON_NAME}
            className={
              selectedButton === TODO_FILTER_ACTIVE_BUTTON_NAME
                ? styles.selected
                : ""
            }
          >
            {TODO_FILTER_ACTIVE_BUTTON_NAME}
          </Button>
        </li>
        <li>
          <Button
            onClick={onClickHandler}
            value={TODO_FILTER_COMPLITED_BUTTON_NAME}
            className={
              selectedButton === TODO_FILTER_COMPLITED_BUTTON_NAME
                ? styles.selected
                : ""
            }
          >
            {TODO_FILTER_COMPLITED_BUTTON_NAME}
          </Button>
        </li>
      </ul>
    </>
  );
};

TodoFilter.propTypes = {
  onFilterHandler: PropTypes.func,
};

export default TodoFilter;
