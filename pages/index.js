import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Berrios — Diseñador & Desarrollador Frontend</title>
      </Head>

      <div className={styles.presentationWrapper}>
        <div className={styles.presentationA}>
          <div className={styles.heading}>
            <p>Diseñador & Desarrollador Frontend</p>
            <h1>Creador de cosas en internet<br />como <span className="highlight-color">sitios web</span> y <span className="highlight-color">aplicaciones</span>.</h1>
          </div>
          <div className={styles.data}>
            <div className={styles.img}>
              <Image
                className={styles.img}
                src="/img/me_1.jpg"
                alt="Este soy yo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className={styles.space}>
              <p>Desde mi infancia siempre me interesó el diseño, de formas muy singulares: la belleza del arte de un CD, la estética y composición de los.</p>
            </div>
          </div>
        </div>
        <div className={styles.presentationB}>
          <div className={styles.arrowWrapper}>
            <div className={styles.arrow}></div>
          </div>
          <div className={styles.img}>
            <Image
              className={styles.img}
              src="/img/me_1.jpg"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles.space}></div>
        </div>
      </div>


      <section className={styles.worksGridWrapper}>
        <h1>
          Algunos <span className="highlight-color">proyectos seleccionados</span>
        </h1>
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
        </div>
      </section>


      <section className={styles.blogPreviewWrapper}>
        <div className={styles.blogPreview}>
          <h1>
            <span className="highlight-color">Escribo algunas cosas</span> sobre los temas que me gustan.
          </h1>
          <div className={styles.blogGrid}>
            <div className={styles.previewCard}>
              <h3>
                Mi Setup Front-end
              </h3>
              <p>
                Siempre he sido curioso por saber con que herramientas trabajan otras personas. Bueno en este post te enseño cual es mi entorno de trabajo en el desarrollo frontend.
              </p>
              <Link href="/blog/post">
                <a className="go-button">Leer más →</a>
              </Link>
            </div>
            <div className={styles.previewCard}>
              <h3>
                Mi Setup Front-end
              </h3>
              <p>
                Siempre he sido curioso por saber con que herramientas trabajan otras personas. Bueno en este post te enseño cual es mi entorno de trabajo en el desarrollo frontend.
              </p>
              <Link href="/blog/post">
                <a className="go-button">Leer más →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}