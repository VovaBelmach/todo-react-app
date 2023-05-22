import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import classNames from "classnames";

const Card = (props) => {
  return (
    <div className={classNames(styles.card, props.className)}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default Card;
