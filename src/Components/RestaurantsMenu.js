import { useEffect } from "react";

const RestaurantsMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10576"
    );
    const json = await data.json;
    console.log(json, "json");
  }
  return (
    <div>
      <p>Menu of Restaurant</p>
    </div>
  );
};

export default RestaurantsMenu;
