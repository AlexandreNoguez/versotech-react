import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

Card.propTypes = {
    pokemons: PropTypes.array,
    isNew: PropTypes.bool
};

function Card({ pokemons, isNew }) {

    const isMultiple = Array.isArray(pokemons);
    const pokemonList = isMultiple ? pokemons : [pokemons];
    return (
        <ul className='flex flex-wrap justify-center text-center gap-4'>
            {pokemonList.map((pokemon) => {
                const url = pokemon.url ? pokemon.url : pokemon.location_area_encounters;

                const regex = /\/(\d+)\//;
                const match = url?.match(regex);
                const pokemonNumber = match ? match[1] : null;
                return (
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <li className="border border-white px-4 py-2 w-36 rounded-lg hover:bg-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all"
                            key={pokemonNumber}
                        >
                            <p>{pokemon.name}</p>
                            <p>PokeDex Nº{pokemonNumber}</p>
                            {isNew ? "NOVO" : null}
                        </li>
                    </Link>
                )
            })}
        </ul>
    );
}

export default Card;
