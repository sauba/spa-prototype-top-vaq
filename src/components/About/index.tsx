import Image from "next/image"

export default function About() {
  return (
    <div className={`
        w-full
        py-14
        about
        flex
        flex-col
        justify-start
        items-center
        text-center
        outline-none
        border-none
        text-zinc-100
        font-pt-mono
      `} id="about">
      <Image src={`/logo.svg`} width={300} height={300} alt="TOP-VAC" className={`pt-8 cursor-none mx-auto animate-surf-skew`} priority />
      <p className={`px-4 lg:px-24 text-center text-lg xl:text-xl 2xl:text-2xl tracking-wider`}>
        TOP-VAQ
      </p>
    </div>
  )
}