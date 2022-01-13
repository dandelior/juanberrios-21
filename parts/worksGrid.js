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
        <motion.div className={styles.worksGrid}>
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
