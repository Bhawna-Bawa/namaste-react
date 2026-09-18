import React, { useEffect } from "react";
import "./Body.scss";
import RestaurantsList from "./RestaurantsList";
import ActiveFilters from "./ActiveFilters";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  
  const [restaurantsList, setRestaurantsList] = React.useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.559108&lng=77.205678&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
      const data = await response.json();
      const filteredRestaurants = data?.data?.cards.filter(({ card }) => card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
      .map(({ card }) => card.card?.info);
      setRestaurantsList(filteredRestaurants || []);
      setFilteredRestaurants(filteredRestaurants || []);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="body-container">
      <ActiveFilters {...{setFilteredRestaurants, fetchData}} />
      {isLoading ? (
          <Shimmer />
      ) : (
        <RestaurantsList {...{ filteredRestaurants }} />
      )}
    </div>
  );
};

export default Body;
