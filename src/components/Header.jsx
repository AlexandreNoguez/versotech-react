import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { List, SignOut } from '@phosphor-icons/react';

import Pokeball from '../assets/pokeball.png'
import useWindowSize from '../hooks/SizeObserver';
import MenuModal from './MenuModal';
import PokemonTrainerModal from './PokemonTrainerModal';
import { logoutUser } from '../redux/user/actions';

import pokehouse from "../assets/house.png"

function Header() {
    const [open, setOpen] = useState(false);
    const [newTrainerModal, setNewTrainerModal] = useState(true);
    const dispatch = useDispatch();
    const { width } = useWindowSize();

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);

    useEffect(() => {
        if (currentUser === null) {
            setNewTrainerModal(true);
        } else {
            setNewTrainerModal(false)
        }
    }, [currentUser]);

    function handleLogout() {
        dispatch(logoutUser({ currentUser: null, knownPokemon: [] }))
    }

    return (
        <header className='flex justify-between items-center p-4 bg-slate-800 w-full'>
            <PokemonTrainerModal open={newTrainerModal} setOpen={setNewTrainerModal} />

            <div className='flex items-center gap-4'>
                <img className='h-4 w-4' src={Pokeball} alt="Logo Pokeball" />
                <h1 className='text-sm'>VersoTech {width > 768 ? "- React dev" : null}</h1>
            </div>
            <div>
                {currentUser ? (
                    <div className='flex gap-2'>
                        <p className='max-w-28  overflow-hidden text-ellipsis whitespace-nowrap'>Olá, {currentUser}!</p>
                        <button className='text-xl' type={'button'} onClick={handleLogout}>
                            <SignOut size={16} />
                        </button>
                    </div>
                ) : <button onClick={() => setNewTrainerModal(true)} type='button'>Entrar</button>}

            </div>
            <div>
                <MenuModal open={open} setOpen={setOpen} />

                {width < 640 ? (
                    <button className='text-xl' onClick={() => setOpen(!open)}>
                        <List size={32} />
                    </button>
                ) : (
                    <nav>
                        <ul className='flex gap-4'>
                                <Link to={"/"}>
                                    <li className='flex items-center justify-center bg-slate-500 hover:bg-slate-400 transition-all rounded-lg px-2 py-2 border border-slate-400'>
                                    {width > 768 ? (
                                        <img className="w-8 h-8" src={pokehouse} alt="" />
                                    ) : null}
                                        Início
                                    </li>
                                </Link>
                                <Link to={"/pokelist"}>
                                    <li className='flex items-center justify-center bg-slate-500 hover:bg-slate-400 transition-all rounded-lg px-2 py-2 border border-slate-400'>
                                    {width > 768 ? (

                                        <img className="flex w-8 h-8" src={Pokeball} alt="" />
                                    ) : null}
                                        Pokelist
                                    </li>
                                </Link>
                                <Link to={"/pokelist/types"}>
                                    <li className='flex items-center justify-center bg-slate-500 hover:bg-slate-400 transition-all rounded-lg px-2 py-2 border border-slate-400'>
                                    {width > 768 ? (

                                        <img className="flex w-8 h-8" src={Pokeball} alt="" />
                                        ) : null}
                                        Buscar por Tipo
                                </li>
                                </Link>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;