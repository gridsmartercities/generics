import "jest-dom/extend-expect";
import React from "react";
import { Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Dialog from "./index";
import theme from "../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Dialog Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <>
        <Dialog id="exercises-open" active={true}>
          Hello
        </Dialog>
        <Dialog id="exercises-closed" active={false}>
          Hello
        </Dialog>
      </>
    </ThemeProvider>
  );
  const dialogOpen = document.querySelector("section#exercises-open");
  const dialogClosed = document.querySelector("section#exercises-closed");
  expect(dialogOpen.dataset.active).toBe("true");
  expect(dialogClosed).toBe(null);

  expect(container.firstChild).toMatchSnapshot();
});
