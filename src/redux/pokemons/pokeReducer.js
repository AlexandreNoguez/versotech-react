
const initialState = {
    loading: false,
    isNew: false,
    pokemons: [],
    error: ''
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'pokemons/request':
            return {
                ...state,
                loading: true
            };
        case 'pokemons/success':
            return {
                loading: false,
                pokemons: action.payload,
                error: ''
            };
        case 'pokemons/failure':
            return {
                loading: false,
                pokemons: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default pokemonReducer;
