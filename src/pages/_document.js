import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Other tags */}
          {/* <link rel="preload" href="/path/to/hero-image.jpg" as="image" /> */}
          <meta name='theme-color' content='#000000' />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
