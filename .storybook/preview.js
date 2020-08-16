import { GlobalStyles } from '../src/styles'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
