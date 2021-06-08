import styles from '../styles/parts/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.rrssLinks}>
                <a href="https://instagram.com/bydandelior">
                    Instagram
                </a>
                <a href="https://twitter.com/dandelior">
                    Twitter
                </a>
                <a href="http://vsco.co/dandelior">
                    VSCO
                </a>
                <a href="https://open.spotify.com/user/dandelior?si=9f0bb210c95942be">
                    Spotify
                </a>
            </div>
            <div className={styles.dotWrapper}>
                <div className={styles.dot}></div>
            </div>
        </footer>
    )
}

export default Footer;