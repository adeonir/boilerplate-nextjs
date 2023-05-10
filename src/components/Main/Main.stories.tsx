import type { Meta, StoryObj } from '@storybook/react'

import { Main } from '.'

const meta = {
  title: 'Main',
  component: Main,
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'NextJS Boilerplate',
    description:
      'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
  },
}
