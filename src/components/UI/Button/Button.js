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

export default Button;
