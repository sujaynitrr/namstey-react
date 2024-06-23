import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.data;
  return (
    <div className="cardContainer">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt=""
        width="100px"
        height="100px"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
