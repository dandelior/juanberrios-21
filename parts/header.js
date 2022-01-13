import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/parts/Header.module.sass";

export default function Header() {
  const router = useRouter();
  // console.log(router);
  const [isOpen, setOpen] = useState("false");
  const [isFixed, setFixed] = useState("false");

  const openMenu = () => {
    setOpen(!isOpen);
    setFixed(!isFixed);
  };
  const closeMenu = () => {
    setOpen(!isOpen);
    setFixed(!isFixed);
  };

  return (
    <motion.header
      className={`${styles.header} ${isFixed ? "" : styles.fixed}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div className={styles.brand}>
        <Link href="/">
          <a>
            <h1 className={styles.logo}>Juan Berrios</h1>
          </a>
        </Link>
        <div
          className={`${styles.burger} ${isOpen ? "" : styles.close}`}
          onClick={openMenu}
        ></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? "" : styles.open}`}>
        <Link href="/">
          <a
            className={router.pathname == "/" ? `${styles.active}` : ""}
            onClick={closeMenu}
          >
            Home
          </a>
        </Link>
        <Link href="/works">
          <a
            className={
              router.pathname == "/works" || router.pathname == "/works/[slug]"
                ? `${styles.active}`
                : ""
            }
            onClick={closeMenu}
          >
            Trabajos
          </a>
        </Link>
        {/* <Link href="/about">
                    <a 
                        className={router.pathname == "/about" ? `${styles.active}` : ""}
                        onClick={closeMenu}
                    >Conóceme</a>
                </Link> */}
        <Link href="/blog">
          <a
            className={
              router.pathname == "/blog" || router.pathname == "/blog/[slug]"
                ? `${styles.active}`
                : ""
            }
            onClick={closeMenu}
          >
            Blog
          </a>
        </Link>
      </div>
    </motion.header>
  );
}
