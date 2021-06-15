import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import WorksGrid from '../parts/worksGrid'
import BlogPreview from '../parts/blogPreview'

// import styles from '../styles/Home.module.css'
import PresentationStyles from '../styles/parts/PresentationWrapper.module.css'

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
              src="/img/jellyfish.jpg"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={PresentationStyles.space}></div>
        </div>
      </div>

      <WorksGrid>
        <h1>
            Algunos <span className="highlight-color">proyectos seleccionados</span>
        </h1>
      </WorksGrid>
      
      <BlogPreview>
        <span className="highlight-color">Escribo algunas cosas</span> sobre los temas que me gustan.
      </BlogPreview>

    </>
  )
}