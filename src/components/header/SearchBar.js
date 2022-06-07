import React from 'react';
import "./SearchBar.css";

const SearchBar = ({
    handleClick,
    search,
    data,
    setSearch
}) => {
    return (
        <form onSubmit={handleClick}>
            <input 
                value={search}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={data}
                onChange={(e) => setSearch(e.target.value)}
            />   
            <input
                disabled={data || !search}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};


export default SearchBar;