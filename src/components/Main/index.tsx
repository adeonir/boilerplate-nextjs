import * as S from './styles'

export const Main = ({
  title = 'NextJS Boilerplate',
  description = 'NextJS, ReactJS, TypeScript, Styled-Components, Storybook and Testing-Library',
}) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/assets/hero-illustration.svg"
      alt="A developer walking and a screen with the text NextJS"
    />
  </S.Container>
)
