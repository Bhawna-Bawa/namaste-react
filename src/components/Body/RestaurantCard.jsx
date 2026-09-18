import React from "react";
import "./Restaurants.scss";
import { RESTAURANT_IMAGE_BASE_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  const navigate = useNavigate();
  const { id, name, cuisines, totalRatingsString, cloudinaryImageId, avgRating } = data;
  
  const getCuisine = (cuisines) => {
    if (cuisines.length > 3) {
      return cuisines.slice(0, 2).join(", ") + ", ...";
    } else {
      return cuisines.join(", ");
    }
  };

  const onRestaurantClick = () => {
    console.log("Navigating to restaurant menu for ID:", id); 
    navigate(`/restaurant/${id}`, { state: { restaurantData: data } });
  }

  return (
    <div className="restaurant-card" key={id} onClick={onRestaurantClick}>
      <img
        className="restaurant-image"
        src={`${RESTAURANT_IMAGE_BASE_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-cuisine">{getCuisine(cuisines)}</p>
      <p className="restaurant-rating">Rating: {avgRating}</p>
      <p className="restaurant-rating">All Ratings: {totalRatingsString}</p>
    </div>
  );
};
export default RestaurantCard;
