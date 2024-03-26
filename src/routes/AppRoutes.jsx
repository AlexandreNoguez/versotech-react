import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PokemonList from "../pages/PokemonList";
import PokeDetails from "../pages/PokeDetails";
import NotFound from "../pages/NotFound";
import PokeTypes from "../pages/PokeTypes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokelist" element={<PokemonList />} />
            <Route path="/pokelist/types" element={<PokeTypes />} />
            <Route path="/pokemon/:name" element={<PokeDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;