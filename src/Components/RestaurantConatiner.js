import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [copyListOfRestaurants, setCopyListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setCopyListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
    <div>
      <div className="btn-container">
        <div>
          <button
            className="btn"
            onClick={() => {
              const topRestaurant = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setListOfRestaurants(topRestaurant);
            }}
          >
            Good one Restaurant For You
          </button>
        </div>
        <div className="search-container">
          <div>
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                const filterData = listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                );
                setCopyListOfRestaurants(filterData);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="restaurant-container">
        {copyListOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
