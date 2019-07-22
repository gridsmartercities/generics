import React, { useState, useEffect } from "react";
import ProType from "prop-types";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform
} from "framer-motion";
import styled from "styled-components";

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
  toggleDialog,
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
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <>
      <AnimatePresence>
        {active === true && (
          <Overlay
            key="overlay"
            onClick={toggleDialog}
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
            <div className="close" key="overlay" onClick={toggleDialog} />
            <Dialog
              id={id}
              drag="y"
              dragConstraints={{ top: 0, bottom: 100 }}
              data-active={active}
              onDragEnd={(_, info) => {
                Math.abs(info.offset.x) > 2 ? toggleDialog() : false;
              }}
              style={{ x, opacity, minWidth: "300px", minHeight: "300px" }}
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
