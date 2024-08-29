import { cavalos } from "@/utils/cavalos"
import Image from "next/image"
import Header from "../Header"

export default function Horses() {
  const cavalosList = cavalos

  return (
    <div className={`cavalos w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`} id="cavalos">
      <Header />

      <div className={`w-full flex-col pb-12`}>
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Cavalos</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            cavalosList.map((cavalo, index) => (
              <div key={index} className={`w-full h-96 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/caracavalo.png`} width={96} height={96} alt="" className={`mx-auto hover:transition-transform hover:scale-125 hover:py-4`} />
                <p>Nome: {cavalo.nome}</p>
                <p>Apelido: {cavalo.nomeFantasia}</p>
                <p>Idade: {cavalo.idade}</p>
                <p>Peso: {cavalo.peso}</p>
                <p>Haras: {cavalo.haras}</p>
                <p>Vaquejadas: {cavalo.vaquejadas}</p>
                <p>Vitórias: {cavalo.vitorias}</p>
                <p>Vaqueiro Corredor: {cavalo.nomeVaqueiro}</p>
                <p>Campeão: {cavalo.campeao}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}