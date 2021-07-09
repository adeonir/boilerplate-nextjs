import Head from 'next/head'
import { AppProps } from 'next/app'

import { GlobalStyles } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
