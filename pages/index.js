// import React, { useRef, useEffect } from "react";
// import { gsap, Expo } from "gsap";

import Head from "next/head";
import MetaTags from "../components/MetaTags";
import WorksGrid from "../parts/worksGrid";
import BlogPreview from "../parts/blogPreview";

import PresentationHome from "../parts/PresentationHome";

import { getAllPosts, getAllWorks } from "../lib/api";

export default function Home({ posts }) {
  // let pageIndex = useRef(null);

  const allWorks = posts.allWorks;
  const allPosts = posts.allPosts;

  // useEffect(() => {
  //   gsap.set(pageIndex, {
  //     opacity: 0,
  //   });
  //   gsap.to(pageIndex, 1, {
  //     opacity: 1,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>Juan Berrios — Diseñador &amp; Desarrollador Frontend</title>
        <MetaTags
          title="Juan Berrios — Diseñador & Desarrollador Frontend"
          description="Creo cosas en internet, como sitios web y aplicaciones móviles. Este es mi sitio web."
          image="/img/og_image.jpg"
          url=""
        />
      </Head>

      <div
      // ref={(el) => {
      //   pageIndex = el;
      // }}
      >
        <PresentationHome />

        <WorksGrid works={allWorks}>
          <h1>
            Algunos{" "}
            <span className="highlight-color">proyectos seleccionados</span>
          </h1>
        </WorksGrid>

        <BlogPreview posts={allPosts}>
          <span className="highlight-color">Escribo</span> sobre las cosas que
          me interesan.
        </BlogPreview>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "excerpt"]);

  const allWorks = getAllWorks([
    "title",
    "slug",
    "coverImage",
    "excerpt",
    "date",
  ]);

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 300);
  // });

  return {
    props: {
      posts: {
        allPosts,
        allWorks,
      },
    },
  };
}
