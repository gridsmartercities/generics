import "jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Mast from "./index";
import theme from "../../../style/theme";
import { ThemeProvider } from "styled-components";

test("Mast Component", () => {
  const { getByLabelText, container } = render(
    <ThemeProvider theme={theme}>
      <Mast onSubmit={() => "yo"}>
        <img src="image.jpg" alt="dogs" />
      </Mast>
    </ThemeProvider>
  );

  expect(container.firstChild).toMatchSnapshot();
});
