// import React, { useRef, useEffect, useState } from "react";
import Router from "next/router";
// import { gsap, Expo } from "gsap";

import Layout from "../parts/layout";
// import Loader from "../components/loader";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  // const [onLoading, setOnLoading] = useState(false);
  // const [onShow, setOnShow] = useState(false);
  // let theApp = useRef(null);

  // useEffect(() => {
  //   gsap.set(theApp, {
  //     opacity: 0,
  //     ease: Expo.out,
  //   });
  //   gsap.to(theApp, 1, {
  //     opacity: 1,
  //     ease: Expo.out,
  //   });

  //   Router.events.on("routeChangeStart", () => {
  //     setOnLoading(true);
  //     setOnShow(true);
  //   });
  //   Router.events.on("routeChangeComplete", () => {
  //     const timer = setTimeout(() => {
  //       setOnLoading(false);
  //       setOnShow(false);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   });
  //   Router.events.on("routeChangeError", () => {
  //     setOnLoading(false);
  //     setOnShow(true);
  //   });
  // }, []);

  return (
    <div
      // ref={(el) => {
      //   theApp = el;
      // }}
      className="theApp"
    >
      {/* <Loader visible={onShow} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* <style>
        {`
          .theApp {
            opacity: 0
          }
        `}
      </style> */}
    </div>
  );
}

export default MyApp;
