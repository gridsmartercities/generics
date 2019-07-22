import React, { useState } from "react";
import Button from "../src/components/generics/button";
import Form from "../src/components/generics/form";
import Dialog from "../src/components/generics/dialog";
import MobileNav from "../src/components/generics/navigation";
import { Input } from "../src/components/generics/inputs";
import theme from "../src/style/theme";
import { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Welcome", module).add("to Storybook", () => <div>hello</div>);

storiesOf("Button", module)
  .add("Link Button", () => (
    <ThemeProvider theme={theme}>
      <Button href="#uurl" onClick={action("url is")}>
        Hello Button
      </Button>
    </ThemeProvider>
  ))
  .add("Submit Button", () => (
    <ThemeProvider theme={theme}>
      <Button type="submit" onClick={action("clicked")}>
        Hello Button
      </Button>
    </ThemeProvider>
  ))
  .add("Regular Button", () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action("clicked")}>Hello Button</Button>
    </ThemeProvider>
  ));

storiesOf("Form", module).add("Standard Form", () => (
  <ThemeProvider theme={theme}>
    <Form onSubmit={action("form submitted")}>
      <Input name="first_name" label="First Name" />
      <Input name="last_name" label="Last Name" />
    </Form>
  </ThemeProvider>
));

const DialogDemo = () => {
  const [dialog, toggleDialog] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={() => toggleDialog(!dialog)}>Open Dialog</Button>
        <Dialog active={dialog} toggleDialog={() => toggleDialog(false)}>
          <h1>Demo</h1>
        </Dialog>
      </>
    </ThemeProvider>
  );
};

storiesOf("Dialog", module).add("Dialog demo", () => <DialogDemo />);

const NavigationItems = props => {
  const menuToggle = e => {
    if (typeof props.closeMenu === "function") {
      props.closeMenu(false);
      return true;
    }
  };
  return (
    <nav className={props.className}>
      <a href="#page1" onClick={menuToggle}>
        Page 1
      </a>
      <a href="#page2" onClick={menuToggle}>
        Page 2
      </a>
      <a href="#page3" onClick={menuToggle}>
        Page 3
      </a>
      <a href="#page4" onClick={menuToggle}>
        Page 4
      </a>
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <>
      <MobileNav>
        <NavigationItems />
      </MobileNav>
    </>
  );
};

storiesOf("Mobile Nav", module).add("Mobile Nav", () => <MobileMenu />);
