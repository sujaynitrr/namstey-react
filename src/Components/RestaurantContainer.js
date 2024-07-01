import { useContext, useEffect, useState } from "react";
import RestaurantCard, { PromptedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";

const RestaurantContainer = () => {
  const { resList, loading, error } = useRestaurantList();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [copyListOfRestaurants, setCopyListOfRestaurants] = useState([]);
  const PromptedCard = PromptedRestaurantCard(RestaurantCard);
  const { user, setUserName } = useContext(userContext);
  useDispatch;
  console.log(user, setUserName, "user");

  useEffect(() => {
    if (resList) {
      setListOfRestaurants(resList);
      setCopyListOfRestaurants(resList);
    }
  }, [resList]);

  // Conditional rendering for loading state
  if (loading) {
    return <Shimmer />;
  }

  // Conditional rendering for error state
  if (error) {
    return <div>Error: {error.message}</div>;
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
            <input
              placeholder="Enter Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                const filterData = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setCopyListOfRestaurants(filterData);
              }}
            >
              Search
            </button>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
      <div className="restaurant-container">
        {copyListOfRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurantData={restaurant.info} />

            {/* Higher order component */}
            <PromptedCard restaurantData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
