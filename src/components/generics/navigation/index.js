import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const MobileControl = styled.span`
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #fff;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  i {
    font-size: 1.5rem;
  }
  header {
    min-width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Overlay = styled(motion.div)`
  width: 100% !important;
  height: 100% !important;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
`;

const PrimaryNavigation = ({
  children,
  className,
  menuLabel = "Menu",
  closeLabel = "Close"
}) => {
  const [navState, setNavState] = useState(false);
  const toggleNav = () => setNavState(!navState);
  if (typeof window !== "undefined") {
    window.onresize = () => {
      setNavState(false);
    };
  }
  return (
    <>
      <MobileControl className={className} onClick={toggleNav}>
        {!closeLabel ? <i className="fa fa-bars" /> : menuLabel}
      </MobileControl>
      <AnimatePresence>
        {navState == true && (
          <Overlay
            key="overlay-mob"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleNav}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {navState == true && (
          <Container
            key="container"
            className="nav-container"
            initial={{ x: "110%" }}
            animate={{ x: 0 }}
            exit={{ x: "110%" }}
            transition={{ duration: 0.3 }}
          >
            <header>
              <span onClick={toggleNav}>
                {!closeLabel ? <i className="fa fa-times" /> : "Close"}
              </span>
            </header>
            {React.Children.map(children, (child, i) => {
              return React.cloneElement(
                child,
                { closeMenu: setNavState },
                children
              );
            })}
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default PrimaryNavigation;
