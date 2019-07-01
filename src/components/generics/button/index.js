import React from "react";
import styled, { css } from "styled-components";

const buttonBase = css`
  background: ${props => props.theme.buttons.background || "blue"};
  color: ${props => props.theme.buttons.color || "#fff"};
  padding: ${props => props.theme.buttons.padding || "0.5rem 2rem"};
  border: ${props => props.theme.buttons.border || "0"};
  border-radius: ${props => props.theme.buttons.borderRadius || "5px"};
  &:hover {
    background: ${props => props.theme.buttons.hoverBackground || "darkBlue"};
    color: ${props => props.theme.buttons.hoverColor || "#fff"};
    cursor: pointer;
  }
`;

const A = styled.a`
  ${buttonBase}
`;

const Button = styled.button`
  ${buttonBase}
`;

const ButtonComponent = ({ href, children }) => {
  if (href) {
    return <A href={href}>{children}</A>;
  } else {
    return <Button type="submit">{children}</Button>;
  }
};

export default ButtonComponent;
