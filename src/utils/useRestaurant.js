import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurantItems, setRestaurantItems] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  const getRestaurantsMenu = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    if (response.status >= 200 || response.status <= 299) {
      const json = await response.json();
      const restItems = await json?.data?.cards[2].groupedCard?.cardGroupMap
        ?.REGULAR?.cards[1]?.card?.card?.itemCards;
      const restDetails = await json?.data?.cards[0]?.card?.card?.info;
      setRestaurant(restDetails);
      setRestaurantItems(restItems);
    } else {
      console.log(response.status);
    }
  };

  // return restaurant data
  return [restaurantItems, restaurant];
};

export default useRestaurant;
