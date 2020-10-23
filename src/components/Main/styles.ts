import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.darkBackground};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 4rem;
    text-align: center;
  `}
`

export const Logo = styled.img`
  margin-bottom: 3rem;
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`

export const Illustration = styled.img`
  margin-top: 4rem;
  width: min(40rem, 100%);
`
