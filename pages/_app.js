import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../parts/layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
