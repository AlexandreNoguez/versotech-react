import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchPokemon } from '../services/pokemons';
import Card from '../components/Card'

function PokemonList() {
    const { pokemons, loading, isNew } = useSelector(rootReducer => rootReducer.pokemonReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPokemon(dispatch);
    }, []);

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <h1 className='mb-4'>Pokemon List</h1>
            {loading ? (
                <p>Carregando...</p>
            ) :

                <ul className='flex flex-wrap justify-center text-center gap-4'>
                    {
                        pokemons ? (
                            <Card pokemons={pokemons} isNew={isNew} />

                        ) : null}

                </ul>
            }
        </div>
    )
}

export default PokemonList;