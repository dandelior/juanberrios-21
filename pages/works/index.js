import Head from 'next/head'
import WorksGrid from '../../parts/worksGrid'

import styles from '../../styles/parts/PresentationWrapper.module.sass'

import { getAllWorks } from '../../lib/api'

export default function Works({ works }) {

    const allWorks = works.allWorks;

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
                    <svg className={styles.arrow} width="85" height="221" viewBox="0 0 85 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693" strokeWidth="3"/>
                    </svg>
                </div>
            </div>
        </section>

        <WorksGrid works={allWorks} />
    </>
  )
}

export async function getStaticProps() {
  
    const allWorks = getAllWorks([
      'title',
      'excerpt',
      'coverImage',
      'slug',
      'date'
    ])
  
    return {
      props: { 
        works: {
          allWorks,
        }
      },
    }
    
  }