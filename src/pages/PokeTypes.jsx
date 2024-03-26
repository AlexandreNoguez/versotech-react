import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "redux"
import SearchInput from "../components/SearchInput";
import Loading from "../components/Loading";
import Card from "../components/Card";

function PokeTypes() {
    const [search, setSearch] = useState();
    const { pokemons, loading } = useSelector(rootReducer => rootReducer.pokemonReducer)
    const dispatch = useDispatch();
    console.log(pokemons);

    useEffect(() => {
        dispatch(search)
    }, [])

    return (
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
                                pokemons ? (
                                    <Card pokemons={pokemons} />
                                ) : null}

                        </ul>

                    </>
            }
        </div>
    )
}

export default PokeTypes;