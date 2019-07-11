import React from "react";
import ProType from "prop-types";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const Container = styled(animated.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  diaplay: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Dialog = styled(animated.section)`
  position: relative;
  background: #fff;
  border-radius: 5px;
  z-index: 2;
`;

const DialogComponent = baseprops => {
  const transitions = useTransition(baseprops.active, null, {
    config: { duration: 200 },
    from: { opacity: 0, transform: "translate3d(0,70px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,70px,0)" }
  });
  return transitions.map(({ item, key, props }) =>
    item ? (
      <Container key={key}>
        <Overlay onClick={baseprops.closeDialog} />
        <Dialog
          id={props.id}
          data-active={baseprops.active}
          style={{ ...props, minWidth: "300px", minHeight: "300px" }}
        >
          {baseprops.children}
        </Dialog>
      </Container>
    ) : null
  );
};

DialogComponent.protoTypes = {
  "data-active": ProType.bool.isRequired
};

export default DialogComponent;
