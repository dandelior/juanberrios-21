import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Work.module.sass'
import PresentationStyles from '../../styles/parts/PresentationWrapper.module.sass'
import nextSectionStyles from '../../styles/parts/NextSection.module.sass'

import { useRouter } from 'next/router'

import { getWorkBySlug, getAllWorks } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
// import formatDate from '../../lib/formatDate';

export default function Work({ work, nextWork }) {

  // console.log(actualWorkDate);
  // console.log(nextWork);
  console.log(nextWork);
  const router = useRouter();

  if (!router.isFallback && !work?.slug) {
    return <p>404</p>
  }

  return (
    <>
      <Head>
        <title>{work.title} — Juan Berrios</title>
      </Head>

      <section className={`${PresentationStyles.presentationWrapper} ${PresentationStyles.noBottom}`}>
        <div className={PresentationStyles.presentationA}>
          <div className={PresentationStyles.heading}>
            <p>{work.tags}</p>
            <h1>
              {work.pretitle} <span className="highlight-color">{work.title}</span>
            </h1>
          </div>
        </div>
        <div className={PresentationStyles.presentationB}>
          <div className={PresentationStyles.arrowWrapper}>
            <svg className={PresentationStyles.arrow} width="85" height="221" viewBox="0 0 85 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693" strokeWidth="3"/>
              </svg>
          </div>
        </div>
      </section>

      <div className={styles.workImage}>
        <div className={styles.img}>
          <Image
            src={work.featuredImage}
            alt={work.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className={styles.workContent}>
        <div className={styles.desc}>
          <p dangerouslySetInnerHTML={{__html: work.desc}}></p>
        </div>
        <div dangerouslySetInnerHTML={{__html: work.content}}></div>
      </div>

      {nextWork && (
        <div className={nextSectionStyles.next}>
          <p>Más Proyectos</p>
          <h1>
            Siguiente:<br />
            <Link as={`/works/${nextWork.slug}`} href="/works/[slug]">
              <a>
                {nextWork.title} →
                {/* <span className="highlight-color">
                </span> */}
              </a>
            </Link>
          </h1>
        </div>
      )}

    </>
  )
}

export async function getStaticProps({ params }) {

  const work = getWorkBySlug(params.slug, [
      'pretitle',
      'title',
      'date',
      'desc',
      'slug',
      'tags',
      'content',
      'coverImage',
      'featuredImage',
  ])

  const content = await markdownToHtml(work.content || '')

  const thisWorkDate = work.date;

  const allWorks = getAllWorks([
    'title',
    'slug',
    'date'
  ])

  const foundNextWork = allWorks.find(e => e.date < thisWorkDate);

  const nextWork = foundNextWork ? foundNextWork : '';

  return {
      props: {
          work: {
              ...work,
              content,
          },
          nextWork
      },
  }
}

export async function getStaticPaths() {

  const works = getAllWorks(['slug'])

  return {
      paths: works.map((work) => {
          return {
              params: {
                  slug: work.slug,
              },
          }
      }),
      fallback: false,
  }
}