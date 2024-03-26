import PropTypes from 'prop-types';

SearchInput.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired
};

function SearchInput({ search, setSearch }) {
    return (
        <input className='bg-zinc-700 px-4 py-2 rounded-lg border border-slate-500'
            type="text"
            placeholder='Buscar...'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    )
}

export default SearchInput;