import Image from "next/image";
import PresentationStyles from "../styles/parts/PresentationWrapper.module.sass";

const PresentationHome = () => {
  return (
    <div className={PresentationStyles.presentationWrapper}>
      <div className={PresentationStyles.presentationA}>
        <div className={PresentationStyles.heading}>
          {/* <p>Diseñador & Desarrollador Frontend</p> */}
          <h1>
            <span className="highlight-color">Diseñador</span> y{" "}
            <span className="highlight-color">desarrollador frontend</span>.
            {/* Creador de productos digitales como{" "}
            <span className="highlight-color">sitios web</span> y{" "}
            <span className="highlight-color">aplicaciones</span>. */}
          </h1>
        </div>
        <div className={PresentationStyles.data}>
          <div className={PresentationStyles.img}>
            <Image
              src="/img/me_3.webp"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={PresentationStyles.space}>
            <p>
              Mi trabajo consiste es diseñar y desarrollar{" "}
              <span className="highlight-color">
                sitios web y aplicaciones a medida para marcas y personas
              </span>
              . Me involucro desde el principio con las personas para aprender
              de sus proyectos y así poder crear productos interesantes,
              funcionales y que resuelvan sus necesidades.
              {/* <br />
                <br />
                Actualmente trabajo en <span className="highlight-color"><a href="https://asomic.com" target="_blank" rel="noreferrer noopener">asomic</a></span> como único diseñador UX/UI 
                y también como desarrollador frontend, pero también estoy abierto 
                a recibir proyectos de manera freelance, si estás interesado contáctame 
                a <span className="highlight-color"><a href="mailto:hola@juanberrios.com">hola@juanberrios.com</a></span> o en mis redes sociales. */}
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
        <div className={PresentationStyles.img}>
          <Image
            src="/img/me_6.webp"
            alt="Este soy yo trabajando"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={PresentationStyles.space}></div>
      </div>
    </div>
  );
};

export default PresentationHome;
