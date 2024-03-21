import { Link } from 'react-router-dom';
import Pokeball from '../assets/pokeball.png'
import useWindowSize from '../hooks/SizeObserver';
import MenuModal from './MenuModal';
import { useState } from 'react';
import { List } from '@phosphor-icons/react';

function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const { width } = useWindowSize();

    return (
        <header className='flex justify-between items-center p-4 bg-slate-800'>
            <div className='flex items-center gap-4'>
                <img className='h-4 w-4' src={Pokeball} alt="Logo Pokeball" />
                <h1 className='text-sm'>VersoTech - React dev</h1>
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
    )
}

export default Header;