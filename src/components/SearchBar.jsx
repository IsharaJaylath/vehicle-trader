import React from 'react';
import '../assets/styles/SearchBar.css';
import search from '../assets/images/search.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button style={{backgroundColor:'#CFB680'}}><img src={search} alt="Search" /></button>
    </div>
  );
};

export default SearchBar;