import type { Meta, StoryObj } from '@storybook/react'

import { Main } from '.'

const meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Next.js Boilerplate',
    description: 'Next.js, TypeScript, Tailwind, Storybook, Vitest, Cypress and Testing-Library',
  },
}
