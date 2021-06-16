import Head from 'next/head'
import WorksGrid from '../../parts/worksGrid'

import styles from '../../styles/parts/PresentationWrapper.module.sass'

export default function Works() {
  return (
    <>
        <Head>
            <title>Trabajos — Juan Berrios</title>
        </Head>

        <section className={`${styles.presentationWrapper} ${styles.noBottom}`}>
            <div className={styles.presentationA}>
                <div className={styles.heading}>
                    <p>Trabajos</p>
                    <h1>
                        Algunos <span className="highlight-color">proyectos seleccionados</span>
                    </h1>
                </div>
            </div>
            <div className={styles.presentationB}>
                <div className={styles.arrowWrapper}>
                <div className={styles.arrow}></div>
                </div>
            </div>
        </section>

        <WorksGrid />
    </>
  )
}