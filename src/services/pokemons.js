import Api from "./axiosConfig";
import { toast } from 'react-toastify';

export async function fetchPokemons(offset, limit) {
    try {
        const { data } = await Api.get(`/pokemon?offset=${offset}&limit=${limit}`);
        return data.results
    } catch (error) {
        console.error(error.message);
        toast.error(`Falha ao consultar API`);
    }
}

export async function fetchPokemonByName(pokemon) {
    try {
        if (pokemon) {
            const { data } = await Api.get(`/pokemon/${pokemon.toLowerCase()}`);
            return data
        }
    } catch (error) {
        console.error(error.message);
        toast.error('Erro ao carregar os pokémon');
    }
}