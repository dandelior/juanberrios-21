import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/parts/BlogPreview.module.sass";

export default function BlogPreview(props) {
  const posts = props.posts;

  return (
    <>
      <motion.section
        className={styles.blogPreviewWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
      >
        <div className={styles.blogPreview}>
          {props.children ? <h1>{props.children}</h1> : ""}
          <div className={styles.blogGrid}>
            {posts.map((post, i) => (
              <>
                {post.is_published ? (
                  <div className={styles.previewCard} key={i}>
                    <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                      <a>
                        <h2>{post.title}</h2>
                      </a>
                    </Link>
                    <p>{post.excerpt}</p>
                    <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                      <a className="go-button">Leer más →</a>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
