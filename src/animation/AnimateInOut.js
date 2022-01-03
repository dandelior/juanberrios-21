import React, { useRef, useContext } from "react";
import { gsap, Power4 } from "gsap";
// import { Box } from "theme-ui";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { TransitionContext } from "../context/TransitionContext";

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro,
}) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set });
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    });

    // outro animation
    if (!skipOutro) {
      timeline.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      );
    }
  }, []);

  return (
    <div as={as} sx={from} ref={el} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default React.memo(AnimateInOut);
