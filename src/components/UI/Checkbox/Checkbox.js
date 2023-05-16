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
          disabled={props.isDisabled}
          onChange={props.onChange}
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
  onChange: PropTypes.func,
};

export default Checkbox;
