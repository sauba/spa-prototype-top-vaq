import Image from "next/image"

export default function Horses() {
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
      `} id="horses">
      <Image src={`/caracavalo.png`} width={600} height={600} alt="TOP-VAC" className={`cursor-none mx-auto`} priority />
      <p className={`px-4 lg:px-24 text-center text-lg xl:text-xl 2xl:text-2xl tracking-wider`}>
        Cavalos
      </p>
    </div>
  )
}