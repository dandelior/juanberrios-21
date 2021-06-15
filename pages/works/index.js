import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import WorksGrid from '../../parts/worksGrid'

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

        <WorksGrid />
    </>
  )
}