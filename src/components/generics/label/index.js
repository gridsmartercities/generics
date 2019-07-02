import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStyle = styled.label`
  color: ${({ theme }) => theme.label.color || "#666"};
`;

const Label = props => <LabelStyle {...props}>{props.children}</LabelStyle>;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
