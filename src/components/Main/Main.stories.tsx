import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'NextJS Boilerplate',
  description:
    'NextJS, ReactJS, TypeScript, Styled-Components, Storybook, Jest and Testing-Library',
}
