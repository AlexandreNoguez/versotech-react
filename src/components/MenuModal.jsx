import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import pokeball from "../assets/pokeball.png"
import pokehouse from "../assets/house.png"

MenuModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};

function MenuModal({ open, setOpen }) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden mx-20 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[160px]">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                    <div className="sm:flex sm:items-start">
                                        <nav>
                                            <ul className="flex flex-col text-black gap-4">
                                                <li>
                                                    <Link onClick={() => setOpen(!open)} to="/" className='flex items-center gap-4 hover:text-brand-300 transition-all'>
                                                        <img className="w-8 h-8" src={pokehouse} alt="" />
                                                        Início
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setOpen(!open)} to="/pokelist" className='flex items-center gap-4 hover:text-brand-300 transition-all'>
                                                        <img className="w-8 h-8" src={pokeball} alt="" />
                                                        Pokélist
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => setOpen(!open)} to="/pokelist/types" className='flex items-center gap-4 hover:text-brand-300 transition-all'>
                                                        <img className="w-8 h-8" src={pokeball} alt="" />
                                                        Buscar
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default MenuModal;