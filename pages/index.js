import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PresentationStyles from '../styles/parts/PresentationWrapper.module.css'
import WorksGridStyles from '../styles/parts/WorksGrid.module.css'
import BlogPreviewStyles from '../styles/parts/blogPreview.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Berrios — Diseñador &amp; Desarrollador Frontend</title>
      </Head>

      <div className={PresentationStyles.presentationWrapper}>
        <div className={PresentationStyles.presentationA}>
          <div className={PresentationStyles.heading}>
            <p>Diseñador &amp; Desarrollador Frontend</p>
            <h1>Creador de cosas en internet<br />como <span className="highlight-color">sitios web</span> y <span className="highlight-color">aplicaciones</span>.</h1>
          </div>
          <div className={PresentationStyles.data}>
            <div className={PresentationStyles.img}>
              <Image
                className={PresentationStyles.img}
                src="/img/me_1.jpg"
                alt="Este soy yo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className={PresentationStyles.space}>
              <p>Desde mi infancia siempre me interesó el diseño, de formas muy singulares: la belleza del arte de un CD, la estética y composición de los.</p>
            </div>
          </div>
        </div>
        <div className={PresentationStyles.presentationB}>
          <div className={PresentationStyles.arrowWrapper}>
            <div className={PresentationStyles.arrow}></div>
          </div>
          <div className={PresentationStyles.img}>
            <Image
              className={PresentationStyles.img}
              src="/img/me_1.jpg"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={PresentationStyles.space}></div>
        </div>
      </div>


      <section className={WorksGridStyles.worksGridWrapper}>
        <h1>
          Algunos <span className="highlight-color">proyectos seleccionados</span>
        </h1>
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


      <section className={BlogPreviewStyles.blogPreviewWrapper}>
        <div className={BlogPreviewStyles.blogPreview}>
          <h1>
            <span className="highlight-color">Escribo algunas cosas</span> sobre los temas que me gustan.
          </h1>
          <div className={BlogPreviewStyles.blogGrid}>
            <div className={BlogPreviewStyles.previewCard}>
              <Link href="/blog/post">
                <a>
                  <h3>
                    Mi Setup Front-end
                  </h3>
                </a>
              </Link>
              <p>
                Siempre he sido curioso por saber con que herramientas trabajan otras personas. Bueno en este post te enseño cual es mi entorno de trabajo en el desarrollo frontend.
              </p>
              <Link href="/blog/post">
                <a className="go-button">Leer más →</a>
              </Link>
            </div>
            <div className={BlogPreviewStyles.previewCard}>
                <Link href="/blog/post">
                  <a>
                    <h3>
                      Mi Setup Front-end
                    </h3>
                  </a>
                </Link>
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