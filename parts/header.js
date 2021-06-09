import React, { useState } from "react";
import Link from 'next/link'
import styles from '../styles/parts/Header.module.css'

export default function Header() {

    const [isActive, setActive] = useState("false");

    const openMenu = () => {
        setActive(!isActive);
    }

    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <Link href="/">
                    <a>
                        <h1 className={styles.logo}>Juan Berrios</h1>
                    </a>
                </Link>
                <div className={styles.burger} onClick={openMenu}>
                    <div className={styles.meat}></div>
                </div>
            </div>
            <div className={`${styles.menu} ${isActive ? "" : styles.open}`}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/works">
                    <a>Trabajos</a>
                </Link>
                <Link href="/about">
                    <a>Conóceme</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </header>
    )
}