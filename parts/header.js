import React, { useState } from "react";
import Link from 'next/link'
import styles from '../styles/parts/Header.module.css'

export default function Header() {

    const [isActive, setActive] = useState("false");
    const openMenu = () => setActive(!isActive);
    const closeMenu = () => setActive(!isActive)

    return (
        <header className={`${styles.header} ${isActive ? "" : styles.fixed}`}>
            <div className={styles.brand}>
                <Link href="/">
                    <a>
                        <h1 className={styles.logo}>Juan Berrios</h1>
                    </a>
                </Link>
                <div className={`${styles.burger} ${isActive ? "" : styles.close}`} onClick={openMenu}></div>
            </div>
            <div className={`${styles.menu} ${isActive ? "" : styles.open}`}>
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