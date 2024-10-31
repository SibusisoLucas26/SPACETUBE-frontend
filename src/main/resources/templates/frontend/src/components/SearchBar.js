import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <>
             <div className="search-bar-container">
            <div className="title">Tubespace</div>
            <form onSubmit={handleSubmit} className="search-bar">
                <input
                    type="text"
                    placeholder="Search for videos..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">🔍</button>
            </form>
            <div className="downloads">
                <a href="#">Downloads</a>
            </div>
        </div>
        </>
    );
};

export default SearchBar;
