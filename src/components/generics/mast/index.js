import React from "react";
import If from "../if";

const Loader = props => (
  <If case={props.case}>
    <div>{props.children}</div>
  </If>
);

export default Loader;
