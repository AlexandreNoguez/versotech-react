import UserActionsTypes from "./actionTypes"
import { toast } from "react-toastify"
const initialState = {
    currentUser: null,
    knownPokemon: [],
    checkModalOpen: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionsTypes.LOGIN:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionsTypes.LOGOUT:
            return {
                ...state,
                currentUser: null
            }
        case UserActionsTypes.ADD_POKEMON:

            if (state.knownPokemon.some(pokemon => pokemon.id === action.payload.id)) {
                toast.warning("Pokémon já está na tua pokédex")
                return {
                    ...state
                }
            }

            return {
                ...state,
                knownPokemon: [
                    ...state.knownPokemon,
                    { ...action.payload }]
            }
        default:
            return state
    }
}

export default userReducer;