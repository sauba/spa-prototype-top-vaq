import { bois } from "@/utils/bois"
import Image from "next/image"
import Header from "../Header"

export default function Bull() {
  const boisList = bois

  return (
    <div className={`bois w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`} id="bois">
      <Header />

      <div className={`w-full flex-col pb-12`}>
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Bois</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            boisList.map((boi, index) => (
              <div key={index} className={`w-full h-96 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/boiPerfil.png`} width={96} height={96} alt="" className={`mx-auto hover:transition-transform hover:scale-125 hover:py-4`} />
                <p>Nome: {boi.nome}</p>
                <p>Apelido: {boi.nomeFantasia}</p>
                <p>Idade: {boi.idade}</p>
                <p>Peso: {boi.peso}</p>
                <p>Vaquejadas: {boi.vaquejadas}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}