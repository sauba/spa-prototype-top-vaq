import Header from "@/components/Header"
import Image from "next/image"
import "./styles.css"

export default function Session() {
  return (
    <div className={`w-full h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />

      <Image src={`/logo.svg`} width={300} height={300} alt="" className={`mx-auto pb-16`} />

      <p className={`text-center text-2xl`}>Olá, Seja bem-vindo.</p>
      <p className={`text-center text-2xl pb-8`}>Faça o Login para acessar o sistema</p>

      <form action={`/session/in`} method="POST" className={`w-full flex-col justify-center items-center`}>
        <span className={`mx-auto flex justify-center items-center gap-3`}>
          <label htmlFor="email" className={`text-xl text-zinc-100`}>E-mail:</label>
          <input type="email" name="email" id="email" className={`rounded-sm text-center outline-none border-none text-zinc-900`} placeholder="Digite o e-mail" required />
        </span>
        <span className={`mx-auto flex justify-center items-center gap-3 mt-4`}>
          <label htmlFor="password" className={`text-xl text-zinc-100`}>Senha:</label>
          <input type="password" name="password" id="password" className={`rounded-sm text-center outline-none border-none text-zinc-900`} placeholder="Digite a senha" required />
        </span>

        <span className={`w-full flex justify-center items-center`}>
          <button type="submit" className={`bg-lime-600 px-4 py-2 mt-8 rounded-3xl font-bold`}>Entrar</button>
        </span>
      </form>
    </div>
  )
}