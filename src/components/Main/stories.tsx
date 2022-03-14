import { Meta, Story } from '@storybook/react'

import { Main, Props } from '.'

export default {
  title: 'Main',
  component: Main,
} as Meta<Props>

export const Basic: Story<Props> = (args) => <Main {...args} />

Basic.args = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}
