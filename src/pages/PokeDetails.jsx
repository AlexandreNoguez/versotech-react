import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPokemonByName } from '../services/pokemons'
import Loading from "../components/Loading";
import PokeCharts from "../components/PokeCharts";

function PokeDetails() {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState();

    async function getPokemon() {
        try {
            const pokemon = await fetchPokemonByName(name);
            setPokemonDetails(pokemon.data);
            setStats(pokemon.stats);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getPokemon();
        // eslint-disable-next-line
    }, []);

    return (
        isLoading
            ? (<Loading />)
            : (pokemonDetails ?
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2 mb-4 w-[300px] mx-auto justify-center items-center bg-slate-500 rounded-lg py-2">
                        <h1>{name}</h1>
                        <img src={pokemonDetails.sprites.front_default} alt="" />
                        <p>Nº {pokemonDetails.order}</p>
                        <div>
                            <p>Tipo:</p>
                            {pokemonDetails.types.map((type, index) => (
                                <p key={index}>
                                    {type.type.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-4 w-[300px] mx-auto justify-center items-center bg-slate-500 rounded-lg py-2">
                        <p>Habilidades</p>
                        {pokemonDetails.abilities.map((ability, index) => (
                            <p key={index}>{ability.ability.name}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 mb-4 w-[300px] mx-auto justify-center items-center bg-slate-500 rounded-lg py-2">
                        <p>Estatísticas</p>
                        {pokemonDetails?.stats ?
                            <PokeCharts stats={stats} />
                            : null}
                    </div>
                </div>
                : null
            )
    )
}

export default PokeDetails;