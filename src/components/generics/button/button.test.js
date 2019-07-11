import "jest-dom/extend-expect";
import React from "react";
import { Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Button from "./index";
import theme from "../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Regular Button Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Button>Hello</Button>
    </ThemeProvider>
  );
  const button = document.querySelector("button");
  expect(button).toHaveTextContent("Hello");
  expect(container.firstChild).toMatchSnapshot();
});

test("Link Button Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Button type="link" href="/hello">
        Hello
      </Button>
    </ThemeProvider>
  );

  const link = document.querySelector("a");
  expect(link.nodeName).toBe("A");
  expect(link).toHaveTextContent("Hello");
  expect(link.href).toEqual("http://localhost/hello");
  expect(container.firstChild).toMatchSnapshot();
});
