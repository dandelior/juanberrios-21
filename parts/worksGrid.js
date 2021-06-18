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
                                <h3>Kilometro Cero</h3>
                                <p>Una app para tienda y taller de bicicletas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>Viveros El Maitén</h3>
                                <p>Web autoadministrable para vivero de cerezas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>Iglesia Presbiteriana San Pablo</h3>
                                <p>Un lugar en internet para una iglesia centenaria</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/works/work">
                        <a className={styles.workCard}>
                            <div className={styles.img}></div>
                            <div className={styles.data}>
                                <h3>SAGA Service</h3>
                                <p>Actualización de una marca de Control de plagas</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    )
}