import Head from "next/head";
import { motion } from "framer-motion";
import WorksGrid from "../../parts/worksGrid";
import MetaTags from "../../components/MetaTags";

import styles from "../../styles/parts/PresentationWrapper.module.sass";

import { getAllWorks } from "../../lib/api";

export default function Works({ works }) {
  const allWorks = works.allWorks;

  return (
    <>
      <Head>
        <title>Trabajos — Juan Berrios</title>
        <MetaTags
          title="Trabajos — Juan Berrios"
          description="Revisa algunos de mis trabajos realizados para marcas, personas e instituciones."
          image="/img/og_image.jpg"
          url="works/"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className={`${styles.presentationWrapper} ${styles.noBottom}`}>
          <div className={styles.presentationA}>
            <div className={styles.heading}>
              <p>Trabajos</p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", delay: 0.2 }}
              >
                Algunos{" "}
                <span className="highlight-color">proyectos seleccionados</span>
              </motion.h1>
            </div>
          </div>
          <div className={styles.presentationB}>
            <div className={styles.arrowWrapper}>
              <svg
                className={styles.arrow}
                width="85"
                height="221"
                viewBox="0 0 85 221"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </section>

        <WorksGrid works={allWorks} noBottom="true" />
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const allWorks = getAllWorks([
    "title",
    "excerpt",
    "coverImage",
    "slug",
    "date",
  ]);

  await new Promise((resolve) => {
    setTimeout(resolve, 300);
  });

  return {
    props: {
      works: {
        allWorks,
      },
    },
  };
}
