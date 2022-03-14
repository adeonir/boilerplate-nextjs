import * as S from './styles'

export type Props = {
  title: string
  description: string
}

export function Main({ title, description }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Illustration
        src="/assets/hero-illustration.svg"
        alt="A developer walking and a screen with the text NextJS"
      />
    </S.Container>
  )
}
