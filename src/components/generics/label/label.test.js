import "jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Label from "./index";
import Form from "../form";
import theme from "../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Text input Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Form onSubmit={() => "yo"}>
        <Label htmlFor="test1">test 1</Label>
        <input id="test1" />
      </Form>
    </ThemeProvider>
  );

  const input = getByLabelText("test 1");

  expect(container.firstChild).toMatchSnapshot();
});
