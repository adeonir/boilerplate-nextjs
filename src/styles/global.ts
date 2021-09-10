import { createGlobalStyle, css } from 'styled-components'

import { theme } from '.'

export const GlobalStyles = createGlobalStyle`
    ${() => css`
      * {
        margin: 0;
        outline: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        font-size: 62.5%;
        min-width: 320px;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        scroll-behavior: smooth;
        line-height: 1.2;
      }

      html,
      body,
      #__next {
        height: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }
    `};
`
