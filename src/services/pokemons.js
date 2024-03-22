import { PokemonActions } from "../redux/pokemons/actionTypes";
import Api from "./axiosConfig";

export async function fetchPokemons(dispatch) {
    dispatch({
        type: PokemonActions.REQUEST,
        payload: true
    })

    const response = await Api.get('/pokemon');

    console.log(response);

    try {
        if (response) {
            /**
             * Simulando um fetch um pouco mais demorado
             */
            setTimeout(() => {
                dispatch({
                    type: PokemonActions.SUCCESS,
                    payload: response.data.results
                })
            }, 2000)
        }
    } catch (err) {
        dispatch({
            type: PokemonActions.FAILURE,
            payload: `Falha ao consultar API ${err.message}`
        })
    }

}