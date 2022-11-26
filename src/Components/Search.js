import "./Search.css"
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text" src="#"
            id="header-search"
            placeholder="Search "
            name="s" 
        />
        <button className="btn" type="submit">Search</button>
    </form>
);

export default SearchBar;