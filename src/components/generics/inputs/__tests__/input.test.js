import "jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Input from "../input";
import theme from "../../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Text input Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Input label="text 1" name="test1" />
    </ThemeProvider>
  );

  const input = getByLabelText("text 1");

  expect(input.id).toBe("test1");
  expect(container.firstChild).toMatchSnapshot();
});
