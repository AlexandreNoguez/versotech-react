import { toast } from 'react-toastify';
import Api from "./axiosConfig";

import { fetchPokemonByType } from "../redux/pokemons/actions";

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
            let statsArray = [];
            await data.stats.forEach((item) => {

                const statObj = {
                    data: [
                        { x: item.base_stat },
                        { y: item.stat.name }
                    ],
                }
                statsArray.push(statObj);
            })

            var convertedArray = [{
                data: statsArray?.map(function (obj) {
                    var dataObj = obj.data[0];
                    var dataObj1 = obj.data[1];
                    return { x: dataObj1.y, y: dataObj.x };
                })
            }];

            return {
                data: data,
                stats: convertedArray
            }
        }
    } catch (error) {
        console.error(error.message);
        toast.error('Erro ao carregar os pokémon');
    }
}

export async function fetcTypePokemons(dispatch, type) {
    try {
        if (type) {
            const { data } = await Api.get(`/type/${type}`);
            console.log("data", data);
            dispatch(fetchPokemonByType(data))
        }
    } catch (error) {
        console.error(error.message);
        toast.error('Erro ao carregar os pokémon');
    }
}