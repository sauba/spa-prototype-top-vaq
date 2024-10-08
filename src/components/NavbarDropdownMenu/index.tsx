import { Menu, Transition } from "@headlessui/react"
import { Barn, Cow, Horse, House, ListBullets, Phone, SignIn, UserCircle } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-center items-center border-none outline-none overflow-hidden">
      <Menu as="div" className="w-full relative border-none outline-none">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-center items-center rounded-md text-zinc-100 border-none outline-none">
              <ListBullets
                size={56}
                weight="bold"
                className={`px-2 border-none outline-none hover:cursor-pointer text-own-topvaq-title`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className=" bg-own-topvaq-bg-gray min-h-screen justify-center items-center z-50 text-own-topvaq-title">
                <div className="w-full flex-col justify-center items-center">
                  <Image src={`/logotopvaq.svg`} width={300} height={300} alt="vaqueiro montado no cavalo derrubando o boi segurando-o pelo rabo" className={`cursor-none mx-auto`} priority />

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                           justify-center
                           items-center                                                       
                           ${active
                            ? "border-none cursor-pointer font-thin hover:rounded-x-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="/"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <House size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Início</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                          
                           justify-center
                           items-center
                           ${active
                            ? "bg-own-topvaq-bg-gray border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="/bois"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <Cow size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Bois</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                          
                           justify-center
                           items-center
                           ${active
                            ? "bg-own-topvaq-bg-gray border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="#haras"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <Barn size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Haras</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                          
                           justify-center
                           items-center
                           ${active
                            ? "bg-own-topvaq-bg-gray border-none cursor-pointer text-zinc-100 font-thin hover:rounded-x-2xl hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="#vaqueiros"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <UserCircle size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Vaqueiros</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                          
                           justify-center
                           items-center
                           ${active
                            ? "bg-own-topvaq-bg-gray border-none cursor-pointer text-zinc-100 text-center font-thin"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="#cavalos"
                          className={`
                             flex
                             items-center
                             text-center
                             px-2
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <Horse size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Cavalos</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                           justify-center
                           items-center
                           ${active
                            ? "bg-own-topvaq-bg-gray border-none cursor-pointer text-zinc-100 font-thin hover:text-zinc-100 hover:rounded-x-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="#contato"
                          className={`
                             flex
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <Phone size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Contato</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                           flex
                           justify-center
                           items-center                                                       
                           ${active
                            ? "border-none cursor-pointer font-thin hover:rounded-x-2xl"
                            : "text-zinc-100 font-thin"
                          }
                         `}
                      >
                        <Link
                          href="/session"
                          className={`
                             flex
                             justify-center
                             items-center
                             px-4
                             py-2
                             gap-3
                             text-2xl
                             xl:text-3xl
                           `}
                        >
                          <SignIn size={32} weight="bold" className={`text-own-topvaq-title`} />
                          <p className={``}>Entrar</p>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}