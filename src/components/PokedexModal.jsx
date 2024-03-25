import PropTypes from 'prop-types';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { XCircle } from '@phosphor-icons/react'

import { hidePokedex, removeFromPokedex } from '../redux/user/actions';
import sadPokemon from '../assets/sadPokemon.jpg'

PokedexModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};

function PokedexModal({ open, setOpen }) {
    const { knownPokemon } = useSelector(rootReducer => rootReducer.userReducer);
    const cancelButtonRef = useRef(null)
    const dispatch = useDispatch();

    function handleCLosePokedex() {
        dispatch(hidePokedex())
    }

    function handleDeleteFromPokedex(id) {
        console.log("id", id);
        dispatch(removeFromPokedex(id));
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
                            <Dialog.Panel className="fixed right-0 w-4/5 max-w-80 transform overflow-hidden rounded-lg bg-white h-[90vh] text-left shadow-xl transition-all sm:my-8 p-8 overflow-y-scroll">
                                <div className='text-slate-800'>
                                    <h1 className='text-center'>Pokédex!</h1>
                                    <div className='absolute top-4 right-4' onClick={handleCLosePokedex}>
                                        <XCircle size={24} />
                                    </div>
                                    {knownPokemon?.length ? (
                                        <div className="flex flex-col gap-2 mb-4 mx-auto justify-center items-center">
                                            {knownPokemon.map(pokemon => (
                                                <div key={pokemon.id} className="flex text-center flex-col gap-2 bg-slate-500 rounded-lg py-2 px-8">
                                                    <div className='relative top-4 right-4' onClick={() => handleDeleteFromPokedex(pokemon.id)}>
                                                        <XCircle size={24} />
                                                    </div>
                                                    <h1>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substring(1)}`}</h1>
                                                    <img src={pokemon.sprites.front_default} alt="" />
                                                    <p>Nº {pokemon.order}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) :
                                        <div className='flex flex-col gap-2 items-center justify-center'>
                                            <img src={sadPokemon} alt="" />
                                            <p className='text-center'>Oh, que pena! Ainda não descobriu nenhum pokémon!</p>
                                        </div>
                                    }
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default PokedexModal;