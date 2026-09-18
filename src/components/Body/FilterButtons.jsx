import React from "react";

const FilterButtons = ({ filtersConfig, activeFilter }) => {
  return (
    <div className="filter-buttons-container">
      {filtersConfig.map(({ label, onClick, id, className }) => {
        const isActive = activeFilter === id;
        return (
          <button
            className={`filter-button ${className || ""} ${isActive ? "active" : ""}`}
            onClick={onClick}
            key={id}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
