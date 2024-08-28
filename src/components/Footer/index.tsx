'use client'
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`w-full z-10 flex-col justify-center items-center text-center font-pt-mono`}
      id="contato"
    >
      <div className={`w-full flex flex-col justify-center items-center mx-auto`}>
        <span
          className={`text-4xl lg:text-6xl text-center tracking-widest font-allura text-zinc-100 pt-16`}
        >
          TOP-VAQ
        </span>

        <span
          className={`text-lg tracking-widest flex-wrap text-zinc-100`}
        >
          Redes Sociais:
        </span>

        <div className={`flex justify-center items-center py-8 gap-6 z-40`}>
          <div className={``}>
            <span className={`text-zinc-100`}>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo size={56} weight="thin" />
              </Link>
            </span>
          </div>
          <div className={``}>
            <span className={`text-zinc-100`}>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={56} weight="thin" />
              </Link>
            </span>
          </div>
          <div className={``}>
            <span className={`text-zinc-100`}>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={56} weight="thin" />
              </Link>
            </span>
          </div>
        </div>

        <p className="font-bad-script text-center text-zinc-100">TOP-VAC © 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}