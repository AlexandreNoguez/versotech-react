import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import pokemonReducer from "./pokemons/reducer";

const rootReducer = combineReducers({
    userReducer,
    pokemonReducer
});

export default rootReducer;