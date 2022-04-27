import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import '../.jest/next-image-mock'
import { GlobalStyles, theme } from '../src/styles'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
