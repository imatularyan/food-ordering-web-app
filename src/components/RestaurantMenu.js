import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.6674666&lng=73.8896529&menuId=547228"
    );
    const json = await response.json();
    console.log(json?.data);
    setRestaurant(json?.data);
  }

  return (!restaurant) ? <Shimmer/> : (
    <div className="menu-container">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img alt="resImg" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h4>{restaurant.area}</h4>
        <h4>{restaurant.city}</h4>
        <h4>⭑ {restaurant.avgRating}</h4>
        <h4>{restaurant.costForTwoMsg}</h4>
      </div>
      <div className="menu-items">
        <h1>Menu</h1>
        <ul>{Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
