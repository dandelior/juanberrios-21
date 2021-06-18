import Link from 'next/link'
import styles from '../styles/parts/BlogPreview.module.sass'

export default function BlogPreview({items}, props) {

    // console.log(items);

    return (
        <>
            <section className={styles.blogPreviewWrapper}>
                <div className={styles.blogPreview}>
                {props.children ? (
                    <h1>
                        {props.children}
                    </h1>
                ) : ''}
                <div className={styles.blogGrid}>
                    {items.map((post) => (
                        <div className={styles.previewCard}>
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
                    ))}
                </div>
                </div>
            </section>

            {props.hasLoadingMore ? (
                <div className={styles.morePosts}>
                    <Link href="">
                        <a>Cargar más →</a>
                    </Link>
                </div>
            ) : ""}
        </>
    )
}