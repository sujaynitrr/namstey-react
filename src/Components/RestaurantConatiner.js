import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            const topRestaurant = listOfRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurants(topRestaurant);
          }}
        >
          Good one Restaurant For You{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
