import React, { useState } from "react";
import { render } from "react-dom";
import Form from "./components/generics/form";
import { Input } from "./components/generics/inputs";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => {
  const [messages, setMessages] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <Form
        onSubmit={data =>
          setMessages([
            ...messages,
            { type: "error", body: "this was not good" }
          ])
        }
        messages={messages}
      >
        <Input label="test 1" name="test" type="text" />
      </Form>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
