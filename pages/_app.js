// import Router from "next/router";
import { useState, useEffect } from "react";
import PageTransitions from "../components/PageTransitions";
import { useRouter } from "next/router";

import Layout from "../parts/layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  // const [routingPageOffset, setRoutingPageOffset] = useState(0);
  const router = useRouter();
  // useEffect(() => {
  //   const pageChange = () => {
  //     setRoutingPageOffset(window.scrollY);
  //   };
  //   router.events.on("routeChangeStart", pageChange);
  // }, [router.events]);

  return (
    <Layout>
      <PageTransitions
        route={router.asPath}
        // routingPageOffset={routingPageOffset}
      >
        <Component {...pageProps} />
      </PageTransitions>
    </Layout>
  );
}

export default MyApp;
