import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <span>
      <Link href={"#"}>
        <Image
          src={`/logo.svg`}
          width={120}
          height={80}
          alt="vaqueiro montado no cavalo derrubando o boi segurando-o pelo rabo"
          priority
          className="mx-auto py-4 animate-wiggle"
        />
      </Link>
    </span>
  )
}
