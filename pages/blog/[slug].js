import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import postStyles from '../../styles/Post.module.sass'
import PresentationStyles from '../../styles/parts/PresentationWrapper.module.sass'
import nextSectionStyles from '../../styles/parts/NextSection.module.sass'

import { useRouter } from 'next/router'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import formatDate from '../../lib/formatDate';

export default function Post({ post, morePosts, preview }) {

    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <p>404</p>
    }

  return (
    <>
        <Head>
            <title>{post.title} — Juan Berrios</title>
        </Head>

        <section className={`${PresentationStyles.presentationWrapper} ${PresentationStyles.noBottom}`}>
            <div className={PresentationStyles.presentationA}>
            <div className={PresentationStyles.heading}>
                <p>
                    <Link href="/blog">
                        <a>
                            &#8592; Blog
                        </a>
                    </Link>
                </p>
                <h1 className={PresentationStyles.postTitle}>
                    {post.title}
                </h1>
                <p className={PresentationStyles.date}>
                    {formatDate(post.date)}
                </p>
            </div>
            </div>
            <div className={PresentationStyles.presentationB}>
            <div className={PresentationStyles.arrowWrapper}>
                <svg className={PresentationStyles.arrow} width="85" height="221" viewBox="0 0 85 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693" strokeWidth="3"/>
                </svg>
            </div>
            </div>
        </section>

        <div className={postStyles.postImage}>
            <Image
                src={post.coverImage}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
          />
        </div>

        <p className={postStyles.postImageCaption}>
            {post.imageCaption}
        </p>

        <article className={postStyles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}>
        </article>

        <div className={nextSectionStyles.next}>
            <h1>
                Siguiente:<br />
                <Link href="/blog/post">
                    <a>
                        <span className="highlight-color">
                            Un nuevo blog para juegacionar →
                        </span>
                    </a>
                </Link>
            </h1>
        </div>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {

    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'coverImage',
        'imageCaption',
        'ogImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}


// This function gets called at build time
export async function getStaticPaths() {

    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}