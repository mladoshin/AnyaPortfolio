import {useRef, useEffect} from "react"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({ isOpen, setIsOpen, children, title, mode }) {

  //smooth resize animation of a modal
  useEffect(()=>{
    const modal = document.getElementById("modalRef")
    if(mode==="login" && modal){
      modal.style.height = "350px"
    }else if(modal){
      modal.style.height = "550px"
    }
  }, [mode])

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50"
        onClose={()=>closeModal()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div id="modalRef" className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl h-auto">
              <Dialog.Title
                as="h3"
                className="text-xl font-medium leading-6 text-gray-900 text-center"
              >
                {title}
              </Dialog.Title>

              {children}

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}