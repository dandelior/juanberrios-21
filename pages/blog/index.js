import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'

export default function Blog() {
  return (
    <>
        <Head>
            <title>Blog — Juan Berrios</title>
        </Head>

        <section className={styles.presentationWrapper}>
            <div className={styles.presentationA}>
            <div className={styles.heading}>
                <p>Blog</p>
                <h1>
                    Escribo sobre <span className="highlight-color">diseño</span>, <span className="highlight-color">código</span>, <span className="highlight-color">música</span> y <span className="highlight-color">otras cosas</span>
                </h1>
            </div>
            </div>
            <div className={styles.presentationB}>
            <div className={styles.arrowWrapper}>
                <div className={styles.arrow}></div>
            </div>
            </div>
        </section>

        <section className={styles.blogPreviewWrapper}>
            <div className={styles.blogPreview}>
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