import React from "react";
import PropTypes from "prop-types";
import styles from "./Buttor.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className ?? ""}`}
      type={props.type || "button"}
      value={props.value}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.any,
  type: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
