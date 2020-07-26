import { StoryFn } from '@storybook/addons'

import { GlobalStyles } from '../src/styles'

export const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)
