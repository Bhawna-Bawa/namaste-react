import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./RestaurantMenu.scss";
import Shimmer from "../Shimmer/Shimmer";
import { MENU_ITEM_IMAGE_BASE_URL } from "../../constants/constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const { state } = useLocation();
  const restaurantData = state?.restaurantData;

  console.log("Restaurant Data from state:", restaurantData);

  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [veiwAll, setViewAll] = useState(false);

  useEffect(() => {
    // Fetch restaurant menu data based on the restaurant ID from the URL
    fetchMenuData();
  }, [restaurantId]);

  const fetchMenuData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.559108&lng=77.205678&restaurantId=${restaurantId}`,
      );
      const json = await response.json();
      const data = json?.data?.cards
        .find((card) => card.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (card) =>
            card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        )
        .map((card) => card.card);
      console.log("Fetched menu data:", data);
      setMenuData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching menu data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { name, cuisines, costForTwo, avgRating, sla } = restaurantData || {};

  return (
    <div className="restaurant-menu-container">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-menu">
          <h1>
            {name} - {avgRating}
          </h1>
          <p>
            {cuisines?.join(", ")} - {costForTwo}
          </p>
          <p>Delivery Time: {sla?.deliveryTime}</p>
          <ul>
            {menuData.map(({ card }) => (
              <div key={card.categoryId}>
                <h2 className="menu-category">
                  {`${card.title} (${card.itemCards.length})`}
                </h2>
                {card.itemCards.map(({ card: itemCard }, itemIndex) => (
                  <div key={itemCard.info.id}>
                    <div className="menu-item-card">
                      <div className="menu-item-details">
                        <div className="menu-item-name">
                          {itemCard.info.name}
                        </div>
                        <div className="menu-item-price">
                          ₹{itemCard.info.price / 100}
                        </div>
                      </div>
                      <div className="menu-item-image-wrapper">
                        {itemCard.info.imageId &&
                          ((
                            <img
                              className="menu-item-image"
                              src={`${MENU_ITEM_IMAGE_BASE_URL}/${itemCard.info.imageId}`}
                              alt={itemCard.info.name}
                            />
                          ) ||
                            "")}
                        <div className="menu-item-add">
                          <button type="button">ADD</button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item-card-divider"></div>
                  </div>
                ))}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
