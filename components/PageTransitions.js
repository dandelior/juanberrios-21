import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PageTransitions = ({ children, route, routingPageOffset }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={1000}>
          {children}
        </CSSTransition>
      </TransitionGroup>
      {/* <div className="wipe"></div> */}
      <style global jsx>
        {`

        .page-enter {
  opacity: 0;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 1000ms;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0;
  transition: opacity 1000ms;
}

          {/* .wipe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #E3E3E3;
            z-index: 6;
            transform: translateY(100%);
          }
          @media screen and (prefers-color-scheme: dark) {
            .wipe {
              background-color: #293136;
            }
          }
          .page-enter ~ .wipe {
            transform: translateY(100%);
          }
          .page-exit-active ~ .wipe {
            transform: translateY(0%);
            transition: transform 1000ms ease;
          }
          .page-enter-done ~ .wipe {
            transform: translateY(-100%);
            transition: transform 1000ms ease;
          } */}
        `}
      </style>
    </>
  );
};

export default PageTransitions;
