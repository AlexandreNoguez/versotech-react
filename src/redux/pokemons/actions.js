import PokemonActionsTypes from "./actionTypes";

export const fetchLoadingPokemons = (payload) => ({
    type: PokemonActionsTypes.REQUEST,
    payload
})

export const fetchSinglePokemon = (payload) => ({
    type: PokemonActionsTypes.SUCCESS,
    payload
})

export const fetchPokemonByType = (payload) => ({
    type: PokemonActionsTypes.SUCCESS,
    payload
})