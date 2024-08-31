import Bull from "@/components/Bull";
import Cowboy from "@/components/Cowboy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { bois } from "@/utils/bois";

import { haras } from "@/utils/haras";
import { vaqueiros } from "@/utils/vaqueiros";
import Image from "next/image";

export default function Home() {
  const boisList = bois
  const vaqueirosList = vaqueiros

  const harasList = haras

  return (
    <div className={`w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />
      <Image src={`/logo.svg`} width={300} height={300} alt="" className={`mx-auto pb-16`} priority />
      <Cowboy />
      <span className={`py-12`}></span>
      <Bull />
      <Footer />
    </div>
  )
}
