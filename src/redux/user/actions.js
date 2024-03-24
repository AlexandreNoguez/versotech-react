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

export const showModal = (payload) => ({
    type: UserActionsTypes.SHOW_MODAL,
    payload
})

export const hideModal = (payload) => ({
    type: UserActionsTypes.HIDE_MODAL,
    payload
})