export default function MetaTags({ title, description, image, url }) {

    return (
        <>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta itemprop="name" content={title} />
            <meta property="og:type" content="website" />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta itemprop="description" content={description} />
            <link rel="canonical" href={`https://juanberrios.com/${url}`} />
            <meta property="og:url" content={`https://juanberrios.com/${url}`} />
            <meta name="twitter:url" content={`https://juanberrios.com/${url}`} />
            <meta property="og:image" content={`https://juanberrios.com${image}`} />
            <meta property="og:image:width" content="900" />
            <meta property="og:image:height" content="470" />
            <meta name="twitter:image" content={`https://juanberrios.com${image}`} />
            <meta itemprop="image" content=""></meta>
            <meta name="copyright" content="(c) 2021 Juan Berrios" />
            <link rel="author" href="/humans.txt" />
            <meta name="robots" content="NOODP" />
            <meta name="google" content="nositelinkssearchbox" />
            <meta property="og:site_name" content="Juan Berrios" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dandelior" />
            <meta name="twitter:domain" content="juanberrios.com" />
            <meta name="twitter:creator" content="@dandelior" />
        </>
    )
}