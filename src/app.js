import React from "react";
import { render } from "react-dom";
import Form from "./components/generics/form";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Form onSubmit={data => console.log("test", data)}>
      <input name="test" type="text" required />
    </Form>
  </ThemeProvider>
);

render(<App />, document.getElementById("app"));
