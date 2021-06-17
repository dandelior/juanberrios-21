import Head from 'next/head'
import Image from 'next/image'
import WorksGrid from '../parts/worksGrid'
import BlogPreview from '../parts/blogPreview'

import PresentationStyles from '../styles/parts/PresentationWrapper.module.sass'

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
            <h1>
              Creador de cosas en internet como <span className="highlight-color">sitios web</span> y <span className="highlight-color">aplicaciones</span>.</h1>
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
          <div className={`${PresentationStyles.arrowWrapper} ${PresentationStyles.onHome}`}>
            <svg className={PresentationStyles.arrow} width="85" height="221" viewBox="0 0 85 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693" strokeWidth="3"/>
            </svg>
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