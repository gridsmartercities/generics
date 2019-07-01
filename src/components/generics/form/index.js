import React, { useRef } from "react";
import PropTypes from "prop-types";
import { formatFormData } from "./helper";
import Button from "../button";

const Form = ({ onSubmit, buttonValue = "submit", children }) => {
  const form = useRef(0);

  const submit = e => {
    e.preventDefault();
    const formatedData = formatFormData([...form.current]);
    onSubmit(formatedData);
  };

  return (
    <form ref={form} onSubmit={submit}>
      {children}
      <Button>{buttonValue}</Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonValue: PropTypes.string
};

export default Form;
