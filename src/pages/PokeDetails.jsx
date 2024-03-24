import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPokemonByName } from '../services/pokemons'

function PokeDetails() {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    async function getPokemon() {
        try {
            const pokemon = await fetchPokemonByName(name);
            setPokemonDetails(pokemon);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getPokemon();
        // eslint-disable-next-line
    }, [])

    return (
        <h1>
            {isLoading ? "Carregando..." : (pokemonDetails && JSON.stringify(pokemonDetails))} {pokemonDetails}
        </h1>
    )
}

export default PokeDetails;