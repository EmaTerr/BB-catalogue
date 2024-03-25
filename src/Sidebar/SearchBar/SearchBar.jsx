// SearchBar.js
import React, { useState } from 'react';
import data from '../../db/data';

function SearchBar({ setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = data.filter(item =>
      item.itemName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filteredData);
  };
  
  return (
    <div className="flex justify-end"> {/* Place input on the right */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex px-3 py-1 my-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
