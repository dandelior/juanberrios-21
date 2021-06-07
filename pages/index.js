// import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      {/* Presentation Wrapper */}
      <div className={styles.presentationWrapper}>
        <div className={styles.presentationA}>
          <div className={styles.heading}>
            <p>Diseñador & Desarrollador Frontend</p>
            <h1>Creo cosas en internet como <span className="highlight-color">sitios web</span> y <span className="highlight-color">aplicaciones</span>.</h1>
          </div>
          <div className={styles.data}>
            <div className={styles.img}>
              <Image
                src="/img/me_1.jpg"
                alt="Este soy yo"
                layout="responsive"
                width={1554}
                height={958}
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
          <div className={styles.img}></div>
          <div className={styles.space}></div>
        </div>
      </div>

      {/* Grid Works */}
      <section className="works-grid-wrapper">
        <div className="works-grid">
          <div className="work-card">
            <div className="img"></div>
            <div className="data">
              <h3>NFIT</h3>
              <p>Sistema de gestión para centros deportivos</p>
            </div>
          </div>
          <div className="work-card">
            <div className="img"></div>
            <div className="data">
              <h3>NFIT</h3>
              <p>Sistema de gestión para centros deportivos</p>
            </div>
          </div>
          <div className="work-card">
            <div className="img"></div>
            <div className="data">
              <h3>NFIT</h3>
              <p>Sistema de gestión para centros deportivos</p>
            </div>
          </div>
          <div className="work-card">
            <div className="img"></div>
            <div className="data">
              <h3>NFIT</h3>
              <p>Sistema de gestión para centros deportivos</p>
            </div>
          </div>
          <div className="work-card">
            <div className="img"></div>
            <div className="data">
              <h3>NFIT</h3>
              <p>Sistema de gestión para centros deportivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview-wrapper">
        <div className="blog-preview">
          <h1>
            Escribo algunas cosas sobre los temas que me gustan.
          </h1>
          <div className="blog-grid">
            <div className="preview-card">
              <h3>
                Mi Setup Front-end
              </h3>
              <p>
                Siempre he sido curioso por saber con que herramientas trabajan otras personas. Bueno en este post te enseño cual es mi entorno de trabajo en el desarrollo frontend.
              </p>
              <Link href="/">
                <a>Leer más -&#62;</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}