import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [resList, setResList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json, "json");

      const restaurants =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResList(restaurants || []);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return { resList, loading, error };
};

export default useRestaurantList;
