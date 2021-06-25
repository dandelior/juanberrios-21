import Head from 'next/head'
import Image from 'next/image'
import MetaTags from '../components/MetaTags'
import WorksGrid from '../parts/worksGrid'
import BlogPreview from '../parts/blogPreview'

import PresentationStyles from '../styles/parts/PresentationWrapper.module.sass'

import { getAllPosts, getAllWorks } from '../lib/api'

export default function Home({ posts }) {

  const allWorks = posts.allWorks;
  const allPosts = posts.allPosts;

  return (
    <>
      <Head>
        <title>Juan Berrios — Diseñador &amp; Desarrollador Frontend</title>
        <MetaTags 
          title="Juan Berrios — Diseñador & Desarrollador Frontend"
          description="Creo cosas en internet, como sitios web y aplicaciones móviles. Este es mi sitio web."
          image="/img/og_image.jpg"
          url=""
        />
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
                src="/img/me_3.jpg"
                alt="Este soy yo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className={PresentationStyles.space}>
              <p>
                Mi trabajo consiste es diseñar y desarrollar sitios web y aplicaciones a medida para marcas 
                y personas. 
                Me involucro desde el principio con las personas para aprender de sus proyectos y así poder 
                crear productos interesantes, funcionales y que resuelvan sus necesidades.
              </p>
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
              src="/img/me_6.jpg"
              alt="Este soy yo trabajando"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={PresentationStyles.space}></div>
        </div>
      </div>

      <WorksGrid works={allWorks}>
        <h1>
            Algunos <span className="highlight-color">proyectos seleccionados</span>
        </h1>
      </WorksGrid>
      
      <BlogPreview posts={allPosts}>
        <span className="highlight-color">Escribo algunas cosas</span> sobre los temas que me gustan.
      </BlogPreview>

    </>
  )
}

export async function getStaticProps() {

  const allPosts = getAllPosts([
    'title',
    'slug',
    'excerpt',
  ])

  const allWorks = getAllWorks([
    'title',
    'slug',
    'coverImage',
    'excerpt',
    'date'
  ])

  return {
    props: { 
      posts: {
        allPosts,
        allWorks,
      }
    },
  }
  
}