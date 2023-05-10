import Head from 'next/head'

import { Main } from '~/components/Main'

const content = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main {...content} />
    </>
  )
}
