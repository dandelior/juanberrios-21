import Image from "next/image";
import { motion } from "framer-motion";
import PresentationStyles from "../styles/parts/PresentationWrapper.module.sass";

const PresentationHome = () => {
  return (
    <div className={PresentationStyles.presentationWrapper}>
      <div className={PresentationStyles.presentationA}>
        <div className={PresentationStyles.heading}>
          <p>Juan Berrios</p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
          >
            <span className="highlight-color">Diseñador</span> y{" "}
            <span className="highlight-color">desarrollador frontend</span>.
          </motion.h1>
        </div>
        <div className={PresentationStyles.data}>
          <motion.div
            className={PresentationStyles.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 0.7, duration: 0.5 }}
          >
            <Image
              src="/img/me_3.webp"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </motion.div>
          <div className={PresentationStyles.space}>
            <p>
              Mi trabajo consiste es diseñar y desarrollar{" "}
              <span className="highlight-color">
                sitios web y aplicaciones a medida para marcas y personas
              </span>
              . Me involucro desde el principio con las personas para aprender
              de sus proyectos y así poder crear productos interesantes,
              funcionales y que resuelvan sus necesidades.
            </p>
          </div>
        </div>
      </div>
      <div className={PresentationStyles.presentationB}>
        <div
          className={`${PresentationStyles.arrowWrapper} ${PresentationStyles.onHome}`}
        >
          <svg
            className={PresentationStyles.arrow}
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
        <motion.div
          className={PresentationStyles.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.7, duration: 0.5 }}
        >
          <Image
            src="/img/me_6.webp"
            alt="Este soy yo trabajando"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
        <div className={PresentationStyles.space}></div>
      </div>
    </div>
  );
};

export default PresentationHome;
