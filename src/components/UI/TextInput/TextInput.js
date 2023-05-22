import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

const TextInput = (props) => { 
  return (
    <>
      <input
        type="text"
        className={styles.textInput}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
};

export default TextInput;
