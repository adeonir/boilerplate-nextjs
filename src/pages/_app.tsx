import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '~/styles'

const font = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <meta
          name="description"
          content="A simple project to work with NextJS, React, TypeScript and Styled-Components"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component className={font.className} {...pageProps} />
      </ThemeProvider>
    </>
  )
}
