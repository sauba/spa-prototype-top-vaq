import { vaqueiros } from "@/utils/vaqueiros"
import Image from "next/image"
import Header from "../Header"

export default function Cowboy() {
  const vaqueirosList = vaqueiros

  return (
    <div className={`vaqueiros w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono pb-12`} id="vaqueiros">
      <Header />

      <div className={`w-full flex-col`}>
        <h1 className={`text-center text-3xl xl:text-8xl pt-32 pb-4 font-allura`}>Vaqueiros</h1>

        <div className={`w-full grid grid-cols-2 xl:grid-cols-5 justify-center items-center gap-1`}>
          {
            vaqueirosList.map((vaqueiro, index) => (
              <div key={index} className={`w-full h-96 rounded-lg card bg-gradient-to-bl from-amber-400 to-amber-700 to-70% p-4 mx-auto`}>
                <Image src={`/vaqueiroPerfil.png`} width={96} height={96} alt="" className={`mx-auto hover:transition-transform hover:scale-110 hover:py-4`} />
                <p>Nome: {vaqueiro.nome}</p>
                <p>Apelido: {vaqueiro.nomeFantasia}</p>
                <p>Idade: {vaqueiro.idade}</p>
                <p>Estado: {vaqueiro.estado}</p>
                <p>Vaquejadas: {vaqueiro.vaquejadas}</p>
                <p>Vitórias: {vaqueiro.vitorias}</p>
                <p>Vaqueiro Assistente: {vaqueiro.nomeAssistente}</p>
                <p>Campeão: {vaqueiro.campeao}</p>
                <p>Odds: {vaqueiro.odds}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}