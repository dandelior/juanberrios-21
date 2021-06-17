import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/parts/Header.module.sass';

export default function Header() {

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
        <header className={`${styles.header} ${isFixed ? "" : styles.fixed}`}>
            <div className={styles.brand}>
                <Link href="/">
                    <a><h1 className={styles.logo}>Juan Berrios</h1></a>
                </Link>
                <div className={`${styles.burger} ${isOpen ? "" : styles.close}`} onClick={openMenu}></div>
            </div>
            <div className={`${styles.menu} ${isOpen ? "" : styles.open}`}>
                <Link href="/">
                    <a className={styles.active} onClick={closeMenu}>Home</a>
                </Link>
                <Link href="/works">
                    <a onClick={closeMenu}>Trabajos</a>
                </Link>
                {/* <Link> */}
                    <a className={styles.inactive} disabled>Conóceme</a>
                {/* </Link> */}
                <Link href="/blog">
                    <a onClick={closeMenu}>Blog</a>
                </Link>
            </div>
        </header>
    )
}