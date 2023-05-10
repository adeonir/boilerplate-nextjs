import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../src/styles'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    Provider: ThemeProvider,
    themes: {
      light: theme,
    },
  }),
]
