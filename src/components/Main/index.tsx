import { Container, Description, Illustration, Logo, Title } from './styles'

export const Main = () => (
  <Container>
    <Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />

    <Title>React Avançado</Title>
    <Description>NextJS, ReactJS, TypeScript e Styled-Components</Description>

    <Illustration
      src="/assets/hero-illustration.svg"
      alt="Um desenvolvedor caminhando e uma tela com código e também escrito a palavra Next.JS"
    />
  </Container>
)
