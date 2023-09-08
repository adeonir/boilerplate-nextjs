import type { Metadata } from 'next'

import { Main } from '~/components/main'

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js, TypeScript, Tailwind, Storybook, Vitest and Testing-Library',
}

export default function Home() {
  return (
    <Main
      title="Next.js Boilerplate"
      description="Next.js, TypeScript, Tailwind, Storybook, Vitest and Testing-Library"
    />
  )
}
