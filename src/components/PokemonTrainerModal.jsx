import PropTypes from 'prop-types';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { loginUser } from '../redux/user/actions';

PokemonTrainerModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};

function PokemonTrainerModal({ open, setOpen }) {
    const [loggedUser, setLoggedUser] = useState("");
    const cancelButtonRef = useRef(null)
    const dispatch = useDispatch();

    function signIn(event) {
        event.preventDefault();
        if (!loggedUser) {
            return toast.warning("O campo não pode estar em branco")
        }
        dispatch(loginUser(loggedUser));
        setOpen(!open);
        setLoggedUser("");
    }

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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  p-8">
                                <div className='flex flex-col gap-2 text-slate-800'>
                                    <h1>Olá! Você é um novo Treinador Pokémon?</h1>
                                    <p>Qual o seu nome?</p>
                                    <form className='flex flex-col gap-4'>
                                        <input className='bg-slate-500 px-4 py-2 rounded-lg'
                                            placeholder='Digite seu nome'
                                            type="text"
                                            value={loggedUser}
                                            onChange={e => setLoggedUser(e.target.value)}
                                        />
                                        <button onClick={signIn} className='bg-zinc-600 p-2 rounded-lg text-slate-100' type='submit'>OK</button>
                                    </form>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default PokemonTrainerModal;