import { Main } from '~/components/Main'

const content = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}

export default function Home() {
  return <Main {...content} />
}
