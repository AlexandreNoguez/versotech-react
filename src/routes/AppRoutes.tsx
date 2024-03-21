import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PokemonList from "../pages/PokemonList";
import PokeDetails from "../pages/PokeDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokelist" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokeDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;