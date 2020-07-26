import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut" href="/assets/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        />
        <meta
          name="description"
          content="A simple project to work with NextJS, React, TypeScript and Styled-Components"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
