import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PageTransitions = ({ children, route, routingPageOffset }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={1000}>
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
      <div className="wipe"></div>
      <style global jsx>
        {`
          .wipe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #ffffff;
            z-index: 6;
            transform: translateY(100%);
          }
          @media screen and (prefers-color-scheme: dark) {
            .wipe {
              background-color: #293136;
            }
          }
          .page-enter-active {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0;
          }
          .page-exit ~ .wipe {
            transform: translateY(100%);
          }
          .page-exit-active ~ .wipe {
            transform: translateY(0%);
            transition: transform 1000ms ease;
          }
          //   .page-exit-active main {
          //     transform: translateY(-${(props) =>
            props.routingPageOffset}px);
          //   }
          .page-enter-done ~ .wipe {
            transform: translateY(-100%);
            transition: transform 1000ms ease;
          }
        `}
      </style>
    </>
  );
};

export default PageTransitions;
