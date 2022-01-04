import Router from "next/router";

import Layout from "../parts/layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
