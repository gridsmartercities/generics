import React from "react";
import ProType from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import If from "../if";

const Container = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    position: absolute;
    diaplay: flex;
    height: 100%;
    width: 100%;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  diaplay: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
`;

const Dialog = styled(motion.div)`
  position: absolute;
  background: #fff;
  border-radius: 5px;
  z-index: 2;
`;

const DialogComponent = ({
  closeDialog,
  active,
  id,
  children,
  overlayBase = { opacity: 0 },
  overlayAnimate = { opacity: 1 },
  start = { y: "100%" },
  animate = { y: 0 },
  end = { y: "100%" },
  transition = { duration: 0.5 }
}) => {
  return (
    <>
      <AnimatePresence>
        {active === true && (
          <Overlay
            key="overlay"
            onClick={closeDialog}
            initial={overlayBase}
            animate={overlayAnimate}
            exit={overlayBase}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active === true && (
          <Container
            key="dialog"
            initial={start}
            animate={animate}
            exit={end}
            transition={transition}
          >
            <div className="close" key="overlay" onClick={closeDialog} />
            <Dialog
              id={id}
              data-active={active}
              style={{ minWidth: "300px", minHeight: "300px" }}
            >
              {children}
            </Dialog>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

DialogComponent.protoTypes = {
  "data-active": ProType.bool.isRequired
};

export default DialogComponent;
