import axios from "axios";

const Api = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL,
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 5000,

});

export default Api;