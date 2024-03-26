import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SearchInput from "../components/SearchInput";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { fetchLoadingPokemons } from "../redux/pokemons/actions";
import { fetcTypePokemons } from "../services/pokemons";

function PokeTypes() {
    const [search, setSearch] = useState("");
    const [selectType, setSelectType] = useState();
    const { pokemons, loading } = useSelector(rootReducer => rootReducer.pokemonReducer)
    const dispatch = useDispatch();

    async function handleChoosePokemonType() {
        dispatch(fetchLoadingPokemons(true));
        await fetcTypePokemons(dispatch, selectType);

    }

    const filteredPokemons =
        !pokemons || !search
            ? pokemons
            : pokemons.filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase())
            );

    useEffect(() => {
        handleChoosePokemonType()
        // eslint-disable-next-line
    }, [selectType])

    return (
        search ? (
            <div className='flex flex-col justify-center items-center px-4'>
                <h1 className='mb-4'>Pokemon List</h1>
                <div className='flex flex-col gap-4 mb-4'>
                    <SearchInput search={search} setSearch={setSearch} />
                </div>
                {
                    loading ? (
                        <Loading />
                    ) :
                        <>
                            <ul className='flex flex-wrap justify-center text-center gap-4 mb-20'>
                                {
                                    filteredPokemons ? (
                                        <Card pokemons={filteredPokemons} />
                                    ) : null}

                            </ul>

                        </>
                }
            </div>
        ) : (
            <div className='flex flex-col justify-center items-center px-4'>
                <h1 className='mb-4'>Pokemon List</h1 >
                <div className='flex flex-col gap-4 mb-4'>
                    <SearchInput search={search} setSearch={setSearch} />
                        <select value={selectType} onChange={(e) => setSelectType(e.target.value)} className='bg-zinc-700 px-4 py-2 rounded-lg border border-slate-500'>
                            <option hidden>Selecione</option>
                            <option value={"normal"}>Normal</option>
                            <option value={"fighting"}>Lutador</option>
                            <option value={"flying"}>Voador</option>
                            <option value={"poison"}>Veneno</option>
                            <option value={"ground"}>Terra</option>
                            <option value={"rock"}>Pedra</option>
                            <option value={"bug"}>Inseto</option>
                            <option value={"ghost"}>Fantasma</option>
                            <option value={"steel"}>Ferro</option>
                            <option value={"fire"}>Fogo</option>
                            <option value={"water"}>Água</option>
                            <option value={"grass"}>Grama</option>
                            <option value={"electric"}>Elétrico</option>
                            <option value={"psychic"}>Psíquico</option>
                            <option value={"ice"}>Gelo</option>
                            <option value={"dragon"}>Dragão</option>
                            <option value={"dark"}>Escuridão</option>
                            <option value={"fairy"}>Fada</option>
                            {/*
                        Aparentemente esses dois tipos
                        não foram atualizados na pokeapi
                    */}
                            {/* <option value={"unknown"}>Desconhecido</option> */}
                            {/* <option value={"shadow"}>Sombra</option> */}
                        </select>
                    </div>
                    {
                        loading ? (
                            <Loading />
                        ) :
                            <>
                                <ul className='flex flex-wrap justify-center text-center gap-4 mb-20'>
                                    {
                                        pokemons ? (
                                            <Card pokemons={pokemons} />
                                        ) : null}

                                </ul>

                            </>
                    }
                </div>
            )
    )
}

export default PokeTypes;