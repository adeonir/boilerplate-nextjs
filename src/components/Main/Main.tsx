import * as S from './Main.styles'

export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Illustration
        width="432"
        height="328"
        src="/assets/hero-illustration.svg"
        alt="A developer walking and a screen with the text NextJS"
      />
    </S.Container>
  )
}
