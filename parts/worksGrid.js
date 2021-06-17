import Link from 'next/link'
import styles from '../styles/parts/WorksGrid.module.sass'

export default function WorksGrid(props) {
    return (
        <>
            <section className={styles.worksGridWrapper}>
                {props.children ? (
                    <div className={styles.heading}>
                        {props.children}
                    </div>
                ) : ''}
                <div className={styles.worksGrid}>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>NFIT</h3>
                                <p>Sistema de gestión para centros deportivos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>NFIT</h3>
                                <p>Sistema de gestión para centros deportivos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>NFIT</h3>
                                <p>Sistema de gestión para centros deportivos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>NFIT</h3>
                                <p>Sistema de gestión para centros deportivos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>NFIT</h3>
                                <p>Sistema de gestión para centros deportivos</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    )
}