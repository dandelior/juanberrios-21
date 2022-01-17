import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/parts/WorksGrid.module.sass";

export default function WorksGrid(props) {
  const works = props.works;
  const noBottom = props.noBottom;

  return (
    <>
      <section
        className={`${styles.worksGridWrapper} ${
          noBottom ? styles.noBottom : ""
        }`}
      >
        {props.children ? (
          <div className={styles.heading}>{props.children}</div>
        ) : (
          ""
        )}
        <motion.div
          className={styles.worksGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
        >
          {works.map((work, i) => (
            <Link as={`/works/${work.slug}`} href="/works/[slug]" key={i}>
              <a className={styles.workCard}>
                <div className={styles.img}>
                  <Image
                    src={work.coverImage}
                    alt="Este soy yo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className={styles.data}>
                  <h2>{work.title}</h2>
                </div>
              </a>
            </Link>
          ))}
        </motion.div>
      </section>
    </>
  );
}
