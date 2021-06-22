import Document, { Html, Head, Main, NextScript } from 'next/document'

class PortfolioDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/focus.svg" />
          <link rel="alternate icon" href="/favicon.ico"></link>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#990000"></link>
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PortfolioDocument;