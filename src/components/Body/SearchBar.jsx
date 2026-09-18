import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ searchQuery, setSearchQuery, setFilteredRestaurants, fetchData }) => {

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      fetchData(); // Reset to the original list if the search query is empty
      return;
    }
    setFilteredRestaurants((prevList) =>
      prevList.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        id="search-input"
        name="search"
        type="text"
        placeholder="Search for restaurants or cuisines"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
