import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Google Tag */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-WL1Z70MJ68">
            
          </script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-WL1Z70MJ68');
              `,
            }}
          />
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
