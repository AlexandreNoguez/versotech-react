import { Link } from "react-router-dom";

interface PokemonI {
    name: string;
    url: string;
}

interface CardI {
    pokemons: PokemonI[];
    isNew: boolean;
}

function Card({ pokemons, isNew }: CardI) {
    return (
        pokemons.map((pokemon: PokemonI) => (
            <Link to={`/pokemon/${pokemon.name}`}>

                <li className="border border-white px-4 py-2 w-36 rounded-lg hover:bg-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all " key={pokemon.name}>
                    {pokemon.name} {isNew ? "NOVO" : null}
                </li>
            </Link>
        )))
}

export default Card;