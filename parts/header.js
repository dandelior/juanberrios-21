import Link from 'next/link'

export default function Header() {
    return (
        <>
            <Link href="/">
                <a>
                    <h1 className="brand">Juan Berrios</h1>
                </a>
            </Link>
            <div className="burger">
                <div className="meat"></div>
            </div>
            <div className="menu">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/works">
                    <a>Trabajos</a>
                </Link>
                <Link href="/about">
                    <a>Conóceme</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </div>
        </>
    )
}