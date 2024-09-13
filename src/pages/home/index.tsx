'use client'

import About from "@/components/About";
import Bull from "@/components/Bull";
import Cowboy from "@/components/Cowboy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Horse from "@/components/Horse";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openBullModal, setOpenBullModal] = useState(false)
  const [openHorseModal, setOpenHorseModal] = useState(false)
  const [openCowboyModal, setOpenCowboyModal] = useState(false)

  return (
    <div className={`w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-own-topvaq-bg-gray text-zinc-100 font-pt-mono`}>
      <Header />
      <About />

      {/* <div className={`w-full flex justify-center items-center my-16 xl:px-32 bg-bois bg-center bg-cover`}>
        <Bull />
      </div>

      <div className={`w-full flex justify-center items-center my-16 xl:px-32 bg-cavalos bg-center bg-cover`}>
        <Horse />
      </div>

      <div className={`w-full flex justify-center items-center xl:px-32 bg-vaqueiros bg-center bg-cover`}>
        <Cowboy />
      </div> */}

      <div className={`w-full flex justify-center items-center xl:px-32`}>
        <div className={`w-full flex justify-center items-center gap-6`}>
          <button onClick={() => { setOpenBullModal(true) }} className={`bg-teal-700 px-4 py-2 rounded-3xl mt-16`}>Bois</button>
          <button onClick={() => { setOpenCowboyModal(true) }} className={`bg-teal-700 px-4 py-2 rounded-3xl mt-16`}>Vaqueiros</button>
          <button onClick={() => { setOpenHorseModal(true) }} className={`bg-teal-700 px-4 py-2 rounded-3xl mt-16`}>Cavalos</button>
        </div>

        <Modal isOpen={openBullModal} setModalOpen={() => setOpenBullModal(!openBullModal)}>
          <div className={`w-full flex justify-center items-center xl:px-32 bg-bois bg-center bg-cover`}>
            <Bull />
          </div>
        </Modal>

        <Modal isOpen={openHorseModal} setModalOpen={() => setOpenHorseModal(!openHorseModal)}>
          <div className={`w-full flex justify-center items-center xl:px-32 bg-cavalos bg-center bg-cover`}>
            <Horse />
          </div>
        </Modal>

        <Modal isOpen={openCowboyModal} setModalOpen={() => setOpenCowboyModal(!openCowboyModal)}>
          <div className={`flex justify-center items-center xl:px-32 bg-vaqueiros bg-center bg-cover`}>
            <Cowboy />
          </div>
        </Modal>

      </div>

      <Footer />
    </div>
  )
}
