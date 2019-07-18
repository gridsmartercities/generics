import React, { useState } from "react";
import { render } from "react-dom";
import Form from "./components/generics/form";
import { Input, TextArea } from "./components/generics/inputs";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Button from "./components/generics/button";
import Dialog from "./components/generics/dialog";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [sets, setSets] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);

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
        <Input label="Title" name="title" type="text" />
        <TextArea label="Description" name="test" type="text" />
        <Button
          onClick={e => {
            e.preventDefault();
            setSets(Object.assign({}, { exercises: [] }));
          }}
        >
          Add Set
        </Button>
        {JSON.stringify(sets)}
        {Object.keys(sets).map((_, i) => (
          <div key={new Date()}>
            <h3>Set {i + 1}</h3>
            <Button onClick={() => setDialogOpen(true)}>Add Exercise</Button>
          </div>
        ))}
        <Dialog
          active={dialogOpen}
          toggleDialog={() => {
            setDialogOpen(!dialogOpen);
          }}
        >
          Hello
        </Dialog>
      </Form>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
