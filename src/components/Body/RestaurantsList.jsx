import RestaurantCard from "./RestaurantCard";
import "./Restaurants.scss";
const RestaurantsList = ({ filteredRestaurants }) => {

  return (
    <div className="restaurant-container">
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard 
              key={restaurant.id}
              data={restaurant}
            />
          );
        })
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  );
};

export default RestaurantsList;
