import '../.jest/next-image.mock'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { GlobalStyles } from 'styles'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
