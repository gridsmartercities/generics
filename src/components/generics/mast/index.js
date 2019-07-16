import React from "react";
import styled from "styled-components";

const Mast = styled.section`
  position: fixed;
  background: ${props => props.theme.mast.background || "#fff"};
  display: fixed;
  justify-content: center;
  align-items: center;
`;

const MastComponent = ({ children }) => <Mast>{children}</Mast>;

export default MastComponent;
