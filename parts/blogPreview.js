import Link from 'next/link'
import styles from '../styles/parts/BlogPreview.module.sass'

export default function BlogPreview(props) {

    const posts = props.posts;

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
                    {posts.map((post, i) => (
                        <div className={styles.previewCard} key={i}>
                            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                                <a>
                                <h3>
                                    {post.title}
                                </h3>
                                </a>
                            </Link>
                            <p>
                                {post.excerpt}
                            </p>
                            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                                <a className="go-button">Leer más →</a>
                            </Link>
                        </div>
                    ))}
                </div>
                </div>
            </section>

        </>
    )
}