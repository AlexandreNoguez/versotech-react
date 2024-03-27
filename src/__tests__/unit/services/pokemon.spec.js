/* eslint-disable no-undef */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPokemons, fetchPokemonByName, fetcTypePokemons } from '../../../services/pokemons';

const mock = new MockAdapter(axios);

describe('Tests for API request functions', () => {
    afterEach(() => {
        mock.reset();
    });

    test('Should return a LIST of pokémons', async () => {
        const mockData = {
            results: [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }, { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" }, { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" }, { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" }, { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" }, { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" }, { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" }, { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" }, { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" }, { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" }, { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" }],
        };

        mock.onGet('https://pokeapi.co/api/v2/pokemon?offset=0&limit=12').reply(200, mockData);

        const pokemons = await fetchPokemons(0, 12);

        expect(pokemons).toEqual(mockData.results);
    });

    test('Should return DETAILS of a pokémon by NAME', async () => {
        const mockData = {
            stats: [
                { base_stat: 45, stat: { name: 'hp' } },
                { base_stat: 49, stat: { name: 'attack' } },
            ],
        };
        mock.onGet('/pokemon/bulbasaur').reply(200, mockData);

        const pokemonDetails = await fetchPokemonByName('bulbasaur');

        expect(pokemonDetails).toBeDefined();
    });

    test('Should return a LIST of pokémons by TYPE', async () => {
        const mockData = {
            pokemon: [{ pokemon: { name: 'bulbasaur' } }, { pokemon: { name: 'charmander' } }],
        };
        mock.onGet('/type/grass').reply(200, mockData);

        const dispatchMock = jest.fn();
        await fetcTypePokemons(dispatchMock, 'grass');

        expect(dispatchMock).toHaveBeenCalled();
    });
});
