import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    min-width: 320px;
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.2;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`
