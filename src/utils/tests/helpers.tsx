import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'styles'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
