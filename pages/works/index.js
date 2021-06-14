import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Work.module.css'
import PresentationStyles from '../../styles/parts/PresentationWrapper.module.css'
import WorksGridStyles from '../../styles/parts/WorksGrid.module.css'

export default function Works() {
  return (
    <>
        <Head>
            <title>Trabajos — Juan Berrios</title>
        </Head>

        <section className={PresentationStyles.presentationWrapper}>
        <div className={PresentationStyles.presentationA}>
            <div className={PresentationStyles.heading}>
            <p>Trabajos</p>
            <h1>
                Algunos <span className="highlight-color">proyectos seleccionados</span>
                {/* Sitio web autoadministrable para <span className="highlight-color">Viveros El Maitén</span> */}
            </h1>
            </div>
        </div>
        <div className={PresentationStyles.presentationB}>
            <div className={PresentationStyles.arrowWrapper}>
            <div className={PresentationStyles.arrow}></div>
            </div>
        </div>
        </section>

        <section className={WorksGridStyles.worksGridWrapper}>
            <div className={WorksGridStyles.worksGrid}>
            <Link href="/works/work">
                <a className={WorksGridStyles.workCard}>
                <div className={WorksGridStyles.img}></div>
                <div className={WorksGridStyles.data}>
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