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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing[4]};
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.light};
  `}
`

export const Illustration = styled.img`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[16]};
    width: min(40rem, 100%);
  `}
`
