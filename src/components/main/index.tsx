import Image from 'next/image'

export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-16 bg-blue-950 p-16 text-center text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-xl">{description}</h2>
      </div>

      <Image
        width="432"
        height="328"
        src="/assets/hero-illustration.svg"
        alt="A developer walking and a screen with the text Next.js"
        className="w-full min-w-10 max-w-2xl"
      />
    </main>
  )
}
