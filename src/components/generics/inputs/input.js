import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";
const InputStyle = styled.input`
  border: ${({ theme }) => theme.input.border || "1px solid #ccc"};
  padding: ${({ theme }) => theme.input.padding || "0.5rem"};
  margin: ${({ theme }) => theme.input.margin || "5px 0"};
  background: ${({ theme }) => theme.input.background || "#fff"};
  border-radius: ${({ theme }) => theme.input.borderRadius || "5px"};
`;

const Input = props => {
  const { label, name } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle {...props} id={name} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
