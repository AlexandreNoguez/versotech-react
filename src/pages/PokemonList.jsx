import { useEffect, useState } from 'react';
import { SkipBack, SkipForward } from '@phosphor-icons/react'
import { toast } from 'react-toastify'

import { fetchPokemonByName, fetchPokemons } from '../services/pokemons';

import Loading from '../components/Loading'
import Card from '../components/Card'
import SearchInput from '../components/SearchInput';
function PokemonList() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [userPokemonSeach, setUserPokemonSearch] = useState(null);
    const [offSet, setOffSet] = useState(0);
    const limit = 12;
    const [search, setSearch] = useState("");

    async function fetchData() {
        try {
            const pokemonList = await fetchPokemons(offSet, limit);
            setPokemons(pokemonList);
        } catch (error) {
            console.error(error);
            toast.error('Erro ao carregar os pokémons');
        } finally {
            setLoading(false);
        }
    }

    async function searchPokemon() {
        try {
            const pokemon = await fetchPokemonByName(search);
            setUserPokemonSearch(pokemon.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        /**
         * Simulando uma chamada na 
         * api um pouco mais demorada
         */
        const timer = setTimeout(() => {
            fetchData(offSet, limit);
        }, 500)

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [offSet, limit]);



    useEffect(() => {
        setLoading(true);
        /**
         * para evitar muitos renders enquanto 
         * o usuário digita na busca por pokémons
         * na variável search
         */
        const timer = setTimeout(() => {
            searchPokemon()
        }, 1000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [search]);



    function previousPage() {
        if (offSet - limit >= 0) {
            setOffSet(offSet - limit);
        }
    }

    function nextPage() {
        setOffSet(offSet + limit);
    }

    return (
        search
            ? (
                <div className='flex flex-col justify-center items-center px-4'>
                    <h1 className='mb-4'>Pokemon List</h1>
                    <div className='flex flex-col gap-4 mb-4'>
                        <SearchInput search={search} setSearch={setSearch} />
                    </div>
                    {
                        loading ? (
                            <Loading />
                        ) :
                            <>
                                <ul className='flex flex-wrap justify-center text-center gap-4 mb-20'>
                                    {
                                        userPokemonSeach ? (
                                            <Card pokemons={userPokemonSeach} />
                                        ) : null}

                                </ul>

                            </>
                    }
                </div >
            )
            : <div className='flex flex-col justify-center items-center px-4'>
                <h1 className='mb-4'>Pokemon List</h1 >
                <div className='flex flex-col gap-4 mb-4'>
                    <input className='bg-zinc-700 px-4 py-2 rounded-lg'
                        type="text"
                        placeholder='Buscar...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                {
                    loading ? (
                        <Loading />
                    ) :
                        <>
                            <ul className='flex flex-wrap justify-center text-center gap-4 mb-20'>
                                {
                                    pokemons ? (
                                        <Card pokemons={pokemons} />
                                    ) : null}

                            </ul>
                            <div className='flex gap-8 fixed justify-center items-center bottom-4'>
                                <button
                                    onClick={previousPage}
                                    className={`${offSet === 0 ? "bg-slate-400" : "bg-slate-800"} rounded-lg px-4 py-2`}
                                    disabled={offSet === 0}
                                >
                                    <SkipBack size={32} />
                                </button>
                                <button onClick={nextPage} className='bg-slate-800 rounded-lg px-4 py-2'>
                                    <SkipForward size={32} />
                                </button>
                            </div>
                        </>
                }
            </div >
    )
}

export default PokemonList;