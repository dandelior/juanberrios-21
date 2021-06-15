import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BlogPreview from '../../parts/blogPreview'

import styles from '../../styles/Blog.module.css'
import PresentationStyles from '../../styles/parts/PresentationWrapper.module.css'
import BlogPreviewStyles from '../../styles/parts/BlogPreview.module.css'

export default function Blog() {
  return (
    <>
        <Head>
            <title>Blog — Juan Berrios</title>
        </Head>

        <section className={PresentationStyles.presentationWrapper}>
            <div className={PresentationStyles.presentationA}>
            <div className={PresentationStyles.heading}>
                <p>Blog</p>
                <h1>
                    Escribo sobre <span className="highlight-color">diseño</span>, <span className="highlight-color">código</span>, <span className="highlight-color">música</span> y <span className="highlight-color">otras cosas</span>
                </h1>
            </div>
            </div>
            <div className={PresentationStyles.presentationB}>
            <div className={PresentationStyles.arrowWrapper}>
                <div className={PresentationStyles.arrow}></div>
            </div>
            </div>
        </section>

        <BlogPreview />

        <div className={styles.morePosts}>
            <Link href="">
                <a>Cargar más →</a>
            </Link>
        </div>
    </>
  )
}