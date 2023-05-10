import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={props.id}
        name={props.id}
        checked={props.isCompleted}
        onChange={() => {}}
        disabled={props.isDisabled}
      />
    </>
  );
};

export default Checkbox;