import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import TextInput from "../TextInput/TextInput";

const CustomTodoInput = (props) => {
  return (
    <>
      <Checkbox isDisabled={true} />
      <TextInput
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChangeHandler={props.onChangeHandler}
        onBlurHandler={props.onBlurHandler}
      />
    </>
  );
};

CustomTodoInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
};

export default CustomTodoInput;
