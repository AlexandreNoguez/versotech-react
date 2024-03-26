/* eslint-disable no-undef */
import userReducer from '../../../../redux/user/reducer';
import {
    addPokemon,
    hidePokedex,
    loginUser,
    logoutUser,
    removeFromPokedex,
    showPokedex
} from '../../../../redux/user/actions';

describe('userReducer', () => {
    const initialState = {
        currentUser: null,
        knownPokemon: [],
        checkModalOpen: false
    };

    test('should handle LOGIN action', () => {
        const user = { id: 1, name: 'Alexandre' };

        const action = loginUser(user);

        const newState = userReducer(initialState, action);

        expect(newState.currentUser).toEqual(user);
    });

    test('should handle LOGOUT action', () => {
        const state = {
            currentUser: { id: 1, name: 'Alexandre' },
            knownPokemon: [{ id: 35, name: 'Pikachu' }],
            checkModalOpen: true
        };
        const action = logoutUser({ currentUser: null, knownPokemon: [] });

        const newState = userReducer(state, action);

        expect(newState.currentUser).toBeNull();
        expect(newState.knownPokemon).toEqual([]);
    });

    test('should ADD a new pokemon to knownPokemon list', () => {
        const state = {
            currentUser: { id: 1, name: 'Alexandre' },
            knownPokemon: [{ id: 1, name: 'Bulbasaur' }],
            checkModalOpen: true
        };
        const newPokemon = { id: 2, name: 'Ivysaur' };

        const action = addPokemon(newPokemon);

        const newState = userReducer(state, action);

        expect(newState.knownPokemon).toEqual([...state.knownPokemon, newPokemon]);
    });

    test('should SHOW the Pokédex modal', () => {
        const state = {
            currentUser: { id: 1, name: 'Alexandre' },
            knownPokemon: [{ id: 1, name: 'Pikachu' }],
            checkModalOpen: false
        };
        const action = showPokedex();

        const newState = userReducer(state, action);

        expect(newState.checkModalOpen).toBe(true);
    });

    test('should HIDE the pokédex modal', () => {
        const state = {
            currentUser: { id: 1, name: 'Alexandre' },
            knownPokemon: [
                { id: 1, name: 'bulbasaur' },
                { id: 2, name: 'ivysaur' },
                { id: 3, name: 'venosaur' }
            ],
            checkModalOpen: true
        };

        const action = hidePokedex();

        const newState = userReducer(state, action);

        expect(newState.checkModalOpen).toBe(false);
    })

    test('should REMOVE pokémon from pokédex modal', () => {
        const state = {
            currentUser: { id: 1, name: 'Alexandre' },
            knownPokemon: [
                { id: 1, name: 'bulbasaur' },
                { id: 2, name: 'ivysaur' },
                { id: 3, name: 'venosaur' }
            ],
            checkModalOpen: true
        };

        const action = removeFromPokedex(2);

        const newState = userReducer(state, action);

        expect(newState.knownPokemon).toEqual([
            { id: 1, name: 'bulbasaur' },
            { id: 3, name: 'venosaur' }
        ]);
    })

});
