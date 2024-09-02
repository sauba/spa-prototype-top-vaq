'use client'

import Bull from "@/components/Bull";
import Header from "@/components/Header";
import Image from "next/image";
import "./styles.css";

export default function Bois() {

  return (
    <div className={`w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />
      <Image src={`/logo.svg`} width={300} height={300} alt="" className={`mx-auto pb-16`} priority />
      <Bull />
    </div>
  )
}
