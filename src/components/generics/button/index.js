import React from "react";
import styled, { css } from "styled-components";
import Loader from "../loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonBase = css`
  background: ${props => props.theme.buttons.background || "blue"};
  color: ${props => props.theme.buttons.color || "#fff"};
  padding: ${props => props.theme.buttons.padding || "0.5rem 2rem"};
  border: ${props => props.theme.buttons.border || "0"};
  border-radius: ${props => props.theme.buttons.borderRadius || "5px"};
  position: relative;
  width: ${props => props.theme.buttons.width || "100%"};
  overflow: hidden;
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

const ButtonComponent = props => {
  switch (props.type) {
    case "link":
      return (
        <A {...props} href={props.href}>
          {props.children}
        </A>
      );
    case "submit":
      return (
        <Button {...props} type="submit">
          {props.children}
        </Button>
      );
    default:
      return (
        <Button {...props} type="button">
          {props.children}
        </Button>
      );
  }
};

export default props => (
  <Container>
    <Loader case={props.loading === true} />
    <ButtonComponent {...props}>{props.children}</ButtonComponent>
  </Container>
);
