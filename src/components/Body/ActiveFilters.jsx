import React, { useMemo } from "react";
import "./ActiveFilters.scss";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";

const ActiveFilters = ({ setFilteredRestaurants, fetchData }) => {
  const [activeFilter, setActiveFilter] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const filtersConfig = useMemo(
    () => [
      {
        label: "Clear Filters",
        id: "clear-filters",
        onClick: () => {
          setSearchQuery("");
          fetchData();
          setActiveFilter(null);
        },
        className: "clear-filters",
      },
      {
        label: "Top Rated",
        id: "top-rated",
        onClick: () => {
          setFilteredRestaurants((prevList) =>
            prevList.filter((restaurant) => restaurant.avgRating >= 4.5),
          );
          setActiveFilter("top-rated");
        },
        className: "active-filter",
      },
    ],
    [activeFilter, searchQuery, setFilteredRestaurants, fetchData],
  );

  return (
    <div className="active-filters-container">
      <SearchBar
        {...{ searchQuery, setSearchQuery, setFilteredRestaurants, fetchData }}
      />
      <FilterButtons
        {...{ filtersConfig, setFilteredRestaurants, activeFilter }}
      />
    </div>
  );
};

export default ActiveFilters;
