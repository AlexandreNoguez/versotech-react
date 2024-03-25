import UserActionsTypes from "./actionTypes";

export const loginUser = (payload) => ({
    type: UserActionsTypes.LOGIN,
    payload
})
export const logoutUser = (payload) => ({
    type: UserActionsTypes.LOGOUT,
    payload
})

export const addPokemon = (payload) => ({
    type: UserActionsTypes.ADD_POKEMON,
    payload
})

export const showPokedex = () => ({
    type: UserActionsTypes.SHOW_POKEDEX,
})

export const hidePokedex = () => ({
    type: UserActionsTypes.HIDE_POKEDEX,
})

export const removeFromPokedex = (payload) => ({
    type: UserActionsTypes.REMOVE_POKEMON,
    payload
})