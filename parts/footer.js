import styles from '../styles/parts/Footer.module.sass'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.rrssLinks}>
                <a href="https://github.com/dandelior" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://instagram.com/bydandelior" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://twitter.com/dandelior" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="http://vsco.co/dandelior" target="_blank" rel="noopener noreferrer">
                    VSCO
                </a>
                {/* <a href="https://open.spotify.com/user/dandelior?si=9f0bb210c95942be" target="_blank" rel="noopener noreferrer">
                    Spotify
                </a> */}
            </div>
            <div className={styles.dotWrapper}>
                {/* Diseñado en Figma, desarrollado en Next.JS */}
                <div className={styles.dot}></div>
            </div>
        </footer>
    )
}

export default Footer;