import React from 'react';
import "./SearchBar.css";

const SearchBar = ({
    handleClick,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleClick}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(e) => setQuery(e.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};


export default SearchBar;