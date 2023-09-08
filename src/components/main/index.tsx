import Image from 'next/image'

export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 bg-blue-950 p-16 text-center text-white">
      <h1>{title}</h1>
      <h2>{description}</h2>

      <Image
        width="432"
        height="328"
        src="/assets/hero-illustration.svg"
        alt="A developer walking and a screen with the text NextJS"
        className="w-full min-w-10"
      />
    </main>
  )
}
