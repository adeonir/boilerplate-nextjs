import { Container, Description, Illustration, Logo, Title } from './styles'

export const Main = ({
  title = 'React Avançado',
  description = 'NextJS, ReactJS, TypeScript e Styled-Components',
}) => (
  <Container>
    <Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />

    <Title>{title}</Title>
    <Description>{description}</Description>

    <Illustration
      src="/assets/hero-illustration.svg"
      alt="Um desenvolvedor caminhando e uma tela com código e também escrito a palavra Next.JS"
    />
  </Container>
)
