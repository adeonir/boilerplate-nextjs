import Head from 'next/head'
import { AppProps } from 'next/app'

import { GlobalStyles } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut" href="/assets/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
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
