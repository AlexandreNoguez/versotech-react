import { UserActions } from "../redux/user/actionTypes";
import Api from "./axiosConfig";
import { toast } from 'react-toastify';

export async function fetchPokemons(dispatch, offset, limit) {
    dispatch({
        type: UserActions.LOADING,
        payload: true
    })

    try {
        const { data } = await Api.get(`/pokemon?offset=${offset}&limit=${limit}`);

        if (data) {
            /**
             * Simulando um fetch um pouco mais demorado
             */
            setTimeout(() => {
                return data.results
            }, 2000)
        }
    } catch (err) {
        console.error(err.message);
        toast.error(`Falha ao consultar API`);
    } finally {
        dispatch({
            type: UserActions.LOADING,
            payload: false
        })
    }
}

export async function fetchPokemonByName(dispatch, name) {
    dispatch({
        type: UserActions.REQUEST,
        payload: true
    })

    const response = await Api.get(`/pokemon/${name}`);

    try {
        if (response) {
            return response.data.results
        }

    } catch (err) {
        dispatch({
            type: UserActions.FAILURE,
            payload: `Falha ao consultar API ${err.message}`
        })
    } finally {
        dispatch({
            type: UserActions.REQUEST,
            payload: false
        })
    }
}