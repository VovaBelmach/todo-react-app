import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <>
      <input
        className={styles}
        type="checkbox"
        id={props.id}
        name={props.id}
        defaultChecked={props.isDone}
        disabled={props.isDisabled}
        onClick={props.onClick}
      />
    </>
  );
};

export default Checkbox;
