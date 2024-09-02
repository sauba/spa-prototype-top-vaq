import Image from "next/image"

export default function About() {
  return (
    <div className={`
        w-full
        min-h-screen
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
      <Image src={`/logo.svg`} width={480} height={480} alt="" className={`xl:w-2/5 mx-auto pb-16`} priority />
    </div>
  )
}