import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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

        <section className={BlogPreviewStyles.blogPreviewWrapper}>
            <div className={BlogPreviewStyles.blogPreview}>
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

        <div className={styles.morePosts}>
            <Link href="">
                <a>Cargar más →</a>
            </Link>
        </div>
    </>
  )
}