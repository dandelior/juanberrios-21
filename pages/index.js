import Head from "next/head";
import MetaTags from "../components/MetaTags";
import WorksGrid from "../parts/worksGrid";
import BlogPreview from "../parts/blogPreview";

import PresentationHome from "../parts/PresentationHome";

import { getAllPosts, getAllWorks } from "../lib/api";

export default function Home({ posts }) {
  const allWorks = posts.allWorks;
  const allPosts = posts.allPosts;

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

      <div>
        <PresentationHome />

        <WorksGrid works={allWorks}>
          <h1>
            Algunos{" "}
            <span className="highlight-color">proyectos seleccionados</span>
          </h1>
        </WorksGrid>

        <BlogPreview posts={allPosts}>
          Te comparto <span className="highlight-color">lo que sé</span> y{" "}
          <span className="highlight-color">lo que me gusta</span>
          {/* <span className="highlight-color">Escribo</span> sobre las cosas que
          me interesan. */}
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

  return {
    props: {
      posts: {
        allPosts,
        allWorks,
      },
    },
  };
}
