'use client'

import { X } from "@phosphor-icons/react"


export default function Modal({ isOpen, setModalOpen, children }) {

  if (isOpen) {
    return (
      <div className={`fixed top-0 right-0 bottom-0 left-0 justify-center items-center bg-opacity-70 bg-zinc-900 z-50`}>
        <div className={`flex justify-evenly top-2/4 left-2/4 transition-transform rounded-lg text-zinc-900`}>
          <span className={`flex gap-6`}>
            {children}
            <X size={32} weight="bold" className={`text-zinc-100 hover:cursor-pointer`} onClick={setModalOpen} />
          </span>
        </div>
      </div>
    )
  }

  return null
}