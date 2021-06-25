export default function MetaTags({ title, description, image, url }) {

    return (
        <>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Juan Berrios" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={`https://juanberrios.com${image}`} />
            <meta property="og:url" content={`https://juanberrios.com/${url}`} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dandelior" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://juanberrios.com${image}`} />

            <link rel="canonical" href={`https://juanberrios.com/${url}`} />
            <meta name="copyright" content="(c) 2021 Juan Berrios" />
        </>
    )
}