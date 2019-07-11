import React from "react";
import PropTypes from "prop-types";
import { formatFormData } from "./helper";
import Button from "../button";

const Form = ({
  onSubmit,
  buttonValue = "submit",
  children,
  messages = []
}) => {
  const submit = e => {
    e.preventDefault();
    const formNode = [...e.target.elements];
    const formatedData = formatFormData(formNode);
    onSubmit(formatedData);
  };

  return (
    <form onSubmit={submit}>
      {children}
      <div>
        {messages.map(({ type, body }) => (
          <span className={type}>{body}</span>
        ))}
      </div>
      <Button type="submit">{buttonValue}</Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonValue: PropTypes.string
};

export default Form;
