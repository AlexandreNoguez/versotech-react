import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { List, SignOut } from '@phosphor-icons/react';

import Pokeball from '../assets/pokeball.png'
import useWindowSize from '../hooks/SizeObserver';
import MenuModal from './MenuModal';
import PokemonTrainerModal from './PokemonTrainerModal';
import { logoutUser } from '../redux/user/actions';

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
                <h1 className='text-sm'>VersoTech {width > 480 ? "- React dev" : null}</h1>
            </div>
            <div>
                {currentUser ? (
                    <div className='flex gap-2'>
                        <p>Olá, {currentUser}!</p>
                        <button className='text-xl' onClick={handleLogout}>
                            <SignOut size={16} />
                        </button>
                    </div>
                ) : null}

            </div>
            <div>
                <MenuModal open={open} setOpen={setOpen} />

                {width < 480 ? (
                    <button className='text-xl' onClick={() => setOpen(!open)}>
                        <List size={32} />
                    </button>
                ) : (
                    <nav>
                        <ul className='flex gap-4'>
                            <li>
                                <Link to={"/"}>Início</Link>
                            </li>
                            <li>
                                <Link to={"/pokelist"}>Pokelist</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;