import Footer from "./footer";
import Header from "./header";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
