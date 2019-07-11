import React from "react";
import PropTypes from "proptypes";

const If = props => {
  if (props.case) {
    return props.children;
  }
  return null;
};

If.propTypes = {
  case: PropTypes.bool.isRequired
};

export default If;
