import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'
import postStyles from '../../styles/Post.module.css'

export default function Blog() {
  return (
    <>
        <Head>
            <title>Post — Juan Berrios</title>
        </Head>

        <section className={styles.presentationWrapper}>
            <div className={styles.presentationA}>
                <div className={styles.heading}>
                    <p>
                        <Link href="/blog">
                            <a>
                                &#8592; Blog
                            </a>
                        </Link>
                    </p>
                    <h1>
                        Mi Setup Front-end
                    </h1>
                    <p className={styles.date}>
                        14 de Enero de 2021
                    </p>
                </div>
            </div>
            <div className={styles.presentationB}>
                <div className={styles.arrowWrapper}>
                    <div className={styles.arrow}></div>
                </div>
            </div>
        </section>

        <section>

        </section>
    </>
  )
}