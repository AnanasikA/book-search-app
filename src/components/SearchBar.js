import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../store/actions';
import '../styles/SearchBar.css'; // Import stylów

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchBooks(query));
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;



