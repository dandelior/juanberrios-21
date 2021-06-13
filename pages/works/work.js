import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Work.module.css'
import nextSectionStyles from '../../styles/parts/NextSection.module.css'

export default function Work() {
  return (
    <>
      <Head>
        <title>A Work — Juan Berrios</title>
      </Head>

      <section className={styles.presentationWrapper}>
        <div className={styles.presentationA}>
          <div className={styles.heading}>
            <p>Web / Identidad Corporativa</p>
            <h1>
              Sitio web autoadministrable para <span className="highlight-color">Viveros El Maitén</span>
            </h1>
          </div>
        </div>
        <div className={styles.presentationB}>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </section>

      <div className={styles.workImage}>
        <Image
          className={styles.img}
          src="/img/una_img.jpg"
          alt="Este soy yo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className={styles.workContent}>
        <div className={styles.desc}>
          <p>
            El Maitén es un vivero especialista en plantas de cerezas que necesitaba un rebranding para todas sus aplicaciones digitales, sumado a esto, un sitio web autoadministrable.
          </p>
          <p>
            Desarrollamos el sitio web en Wordpress CMS a medida, donde la empresa tiene capacidades para editar prácticamente toda la información sin comprometer la estructura.
          </p>
        </div>
        <img src="/img/una_img.jpg" />
        <img src="/img/una_img.jpg" />
      </div>

      <div className={nextSectionStyles.next}>
        <p>Más Proyectos</p>
        <h1>
          Siguiente:<br />
          <Link href="/works/work">
            <a>
              <span className="highlight-color">
                Kilómetro Cero →
              </span>
            </a>
          </Link>
        </h1>
      </div>
    </>
  )
}