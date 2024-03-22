import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchPokemons } from '../services/pokemons';
import Card from '../components/Card'
import Loading from '../components/Loading'

function PokemonList() {
    const { pokemons, loading, isNew } = useSelector(rootReducer => rootReducer.pokemonReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPokemons(dispatch);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <h1 className='mb-4'>Pokemon List</h1>
            {loading ? (
                <Loading />
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