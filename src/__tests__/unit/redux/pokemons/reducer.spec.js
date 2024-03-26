/* eslint-disable no-undef */
import pokemonReducer from '../../../../redux/pokemons/reducer';
import PokemonActionTypes from '../../../../redux/pokemons/actionTypes';

describe('pokemonReducer', () => {
    const initialState = {
        loading: false,
        pokemons: [],
        error: ''
    };

    test('should handle REQUEST action', () => {
        const action = {
            type: PokemonActionTypes.REQUEST,
            payload: true
        };

        const newState = pokemonReducer(initialState, action);

        expect(newState.loading).toBe(true);
    });

    test('should handle SUCCESS action', () => {
        const pokemonData = [{ name: 'Pikachu' }, { name: 'Charmander' }];
        const action = {
            type: PokemonActionTypes.SUCCESS,
            payload: pokemonData
        };

        const newState = pokemonReducer(initialState, action);

        expect(newState.pokemons).toEqual(pokemonData);
    });

    test('should handle TYPES action', () => {
        const pokemonTypes = ['fire'];
        const action = {
            type: PokemonActionTypes.TYPES,
            payload: pokemonTypes
        };

        const newState = pokemonReducer(initialState, action);

        expect(newState.pokemons).toEqual(pokemonTypes);
    });

});
