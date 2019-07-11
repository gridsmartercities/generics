import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";

const TextareaInput = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: ${({ theme }) => theme.input.border || "1px solid #ccc"};
  padding: ${({ theme }) => theme.input.padding || "0.5rem"};
  margin: ${({ theme }) => theme.input.margin || "5px 0"};
  background: ${({ theme }) => theme.input.background || "#fff"};
  border-radius: ${({ theme }) => theme.input.borderRadius || "5px"};
`;

const Textarea = props => {
  const { label, name } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <TextareaInput {...props} id={name} />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Textarea;
