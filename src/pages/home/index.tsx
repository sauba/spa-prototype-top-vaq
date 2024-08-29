import Header from "@/components/Header";
import { bois } from "@/utils/bois";
import { cavalos } from "@/utils/cavalos";
import { haras } from "@/utils/haras";
import { vaqueiros } from "@/utils/vaqueiros";
import { Farm } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  const boisList = bois
  const vaqueirosList = vaqueiros
  const cavalosList = cavalos
  const harasList = haras

  return (
    <div className={`w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />
      <Image src={`/logo.svg`} width={300} height={300} alt="" className={`mx-auto pb-16`} />

      <div className={`bois w-full flex-col`} id="bois">
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Bois</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            boisList.map((boi, index) => (
              <div key={index} className={`w-48 xl:w-56 h-48 xl:h-56 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/boiPerfil.png`} width={128} height={128} alt="" className={`mx-auto hover:transition-transform hover:scale-125 hover:py-4`} />
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

      <div className={`vaqueiros w-full flex-col`} id="vaqueiros">
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Vaqueiros</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            vaqueirosList.map((vaqueiro, index) => (
              <div key={index} className={`w-48 xl:w-56 h-48 xl:h-56 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/vaqueiroPerfil.png`} width={128} height={128} alt="" className={`mx-auto hover:transition-transform hover:scale-125 hover:py-4`} />
                <p>Nome: {vaqueiro.nome}</p>
                <p>Apelido: {vaqueiro.nomeFantasia}</p>
                <p>Idade: {vaqueiro.idade}</p>
                <p>Peso: {vaqueiro.peso}</p>
                <p>Vaquejadas: {vaqueiro.vaquejadas}</p>
              </div>
            ))
          }
        </div>
      </div>


      <div className={`cavalos w-full flex-col`} id="cavalos">
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Cavalos</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            cavalosList.map((cavalo, index) => (
              <div key={index} className={`w-48 xl:w-56 h-48 xl:h-56 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/caracavalo.png`} width={128} height={128} alt="" className={`mx-auto hover:transition-transform hover:scale-125 hover:py-4`} />
                <p>Nome: {cavalo.nome}</p>
                <p>Apelido: {cavalo.nomeFantasia}</p>
                <p>Idade: {cavalo.idade}</p>
                <p>Peso: {cavalo.peso}</p>
                <p>Vaquejadas: {cavalo.vaquejadas}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={`haras w-full flex-col`} id="haras">
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Haras</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            harasList.map((haras, index) => (
              <div key={index} className={`w-48 xl:w-56 h-48 xl:h-56 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Farm size={32} />
                <p>Nome: {haras.nome}</p>
                <p>Local: {haras.local}</p>
                <p>Estado: {haras.estado}</p>
                <p>Vaquejadas: {haras.vaquejadas}</p>
                <p>Máximo de Torcedores: {haras.maxTorcedores}</p>
                <p>Capacidade de Animais: {haras.maxAnimais}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
