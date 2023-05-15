import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={props.id}
          name={props.id}
          checked={props.isCompleted}
          onChange={() => {}}
          onClick={props.onClick}
          disabled={props.isDisabled}
        />
        {props.description}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.any,
  description: PropTypes.any,
  isCompleted: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
