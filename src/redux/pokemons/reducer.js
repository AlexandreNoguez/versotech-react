import PokemonActionsTypes from "./actionTypes";

const initialState = {
    loading: false,
    pokemons: [],
    error: ''
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActionsTypes.REQUEST:
            return {
                ...state,
                loading: action.payload
            };
        case PokemonActionsTypes.SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
            };
        case PokemonActionsTypes.TYPES:

            return {
                ...state,
                pokemons: action.payload,
            };
        default:
            return state;
    }
};

export default pokemonReducer;