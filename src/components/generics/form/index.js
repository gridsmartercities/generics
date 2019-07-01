import React from "react";
import PropTypes from "prop-types";
import { formatFormData } from "./helper";
import Button from "../button";

const Form = ({ onSubmit, buttonValue = "submit", children }) => {
  const submit = e => {
    e.preventDefault();
    const formNode = [...e.target.elements];
    const formatedData = formatFormData(formNode);
    onSubmit(formatedData);
  };

  return (
    <form onSubmit={submit}>
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
