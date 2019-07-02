import React from "react";
import PropTypes from "prop-types";

const CheckInput = ({ label, name, type = "checkbox", checked }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} checked={checked} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CheckInput;
