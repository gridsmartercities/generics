import "jest-dom/extend-expect";
import React from "react";
import { Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Form from "./index";
import { Input } from "../inputs";
import theme from "../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Form Component", () => {
  const submitAction = jest.fn(data => data);
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Form onSubmit={submitAction} buttonValue="Send">
        <Input label="test 1" name="test1" />
        <Input label="test 2" name="test2" />
      </Form>
    </ThemeProvider>
  );

  const formNode = document.querySelector("form");
  const input1 = getByLabelText("test 1");
  const input2 = getByLabelText("test 2");
  input1.value = "gary";
  input2.value = "blue";

  const button = formNode.querySelector("button");

  Simulate.submit(formNode);
  expect(submitAction.mock.results[0].value).toEqual({
    test1: "gary",
    test2: "blue"
  });
  expect(button).toHaveTextContent("Send");
  expect(submitAction).toHaveBeenCalledTimes(1);
  expect(container.firstChild).toMatchSnapshot();
});
