import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from 'styles'

const customRender = (ui: ReactElement): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
