import Header from "@/components/Header"
import Image from "next/image"
import "./styles.css"

export default function Session() {
  return (
    <div className={`w-full h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />
      <p className={`text-center text-2xl`}>Olá, Seja bem-vindo.</p>
      <p className={`text-center text-2xl`}>Faça o Login para acessar o sistema</p>
      <Image src={`/logo.svg`} width={300} height={300} alt="" className={`mx-auto pb-16`} />
      <form action={`#`} method="POST" className={`flex-col justify-center items-center`}>
        <span className={`flex justify-between items-center gap-3`}>
          <label htmlFor="email" className={`text-xl text-zinc-100`}>E-mail:</label>
          <input type="email" name="email" id="email" className={`rounded-lg outline-none border-none text-xl text-zinc-900`} required />
        </span>
        <span className={`flex justify-between items-center gap-3 mt-4`}>
          <label htmlFor="password" className={`text-xl text-zinc-100`}>Senha:</label>
          <input type="password" name="password" id="password" className={`rounded-lg outline-none border-none text-xl text-zinc-900`} required />
        </span>

        <button type="button" className={`w-full bg-lime-600 py-2 mt-8 rounded-3xl font-bold`}>Entrar</button>
      </form>
    </div>
  )
}