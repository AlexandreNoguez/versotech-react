interface PokeI {
    id?: string;
}

function PokeDetails({ id }: PokeI) {
    return (
        <h1>PokeDetails {id}</h1>
    )
}

export default PokeDetails;