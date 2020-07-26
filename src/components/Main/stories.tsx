import { text, withKnobs } from '@storybook/addon-knobs'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'NextJS, ReactJS, TypeScript e Styled-Components'
    )}
  />
)
