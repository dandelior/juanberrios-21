import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'
import postStyles from '../../styles/Post.module.css'
import nextSectionStyles from '../../styles/parts/NextSection.module.css'

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
                    <h1 className={postStyles.postTitle}>
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

        <div className={postStyles.postImage}></div>
        <p className={postStyles.postImageCaption}>
            Foto por Jeremiah Srahykir, Unsplash
        </p>

        <article className={postStyles.postContent}>

            <p>
                Ok, esta idea no es mía, en cierta forma me estoy colgando de la idea de <a href="https://www.taniarascia.com/my-front-end-web-development-setup/" rel="noopener">este artículo de Tania Rascia</a> (como si fuese un tag, pero sin ser “tageado”).
            </p>
            <p>
                Escribo este post porque siempre he sido curioso por saber cómo trabajan otras personas, sobre todo si son desarrolladores o programadores. Espero que para ti sea interesante conocer con que herramientas trabajo.
            </p>
            <h2>Mi Setup Front-end</h2>
            <p>
                Odiado y amado, <strong>macOs</strong> es el sistema operativo que utilizo desde 2013 y del cual me enamoré apenas lo comencé a usar. Hablar de macOS y del porqué es tan bueno daría para largo, así que acotando esto a las tareas de front-end que realizo puedo decir que me gusta que la terminal del mac sea muy parecida a la de Linux, sobre todo porque la mayoría de los servidores en la web corren con Linux.
            </p>
            <p>
                Ademas, se siente amigable y cercano al momento de hacer cosas tan repetitivas y rutinarias como instalar aplicaciones y navegar por tus archivos. Sobre todo si usas un iPhone o un iPad, el ecosistema será tan necesario como respirar, porque tendrás sincronización de archivos, música y fotos entre dispositivos sin necesidad de bajar aplicaciones de terceros.
            </p>
            <p>
                <strong>Sistema operativo</strong>: macOS
            </p>

        </article>

        <div className={nextSectionStyles.next}>
            <h1>
                Siguiente:<br />
                <Link href="/blog/post">
                    <a>
                        <span className="highlight-color">
                            Un nuevo blog para juegacionar →
                        </span>
                    </a>
                </Link>
            </h1>
        </div>
    </>
  )
}