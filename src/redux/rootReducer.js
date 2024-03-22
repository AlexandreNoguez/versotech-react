import { combineReducers } from "redux";
import pokemonReducer from "./pokemons/pokeReducer";

export const rootReducer = combineReducers({
    pokemonReducer
});
