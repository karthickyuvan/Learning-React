import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  // Handle input change and update the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search notes..."
      />
    </div>
  );
}

export default SearchBar;
