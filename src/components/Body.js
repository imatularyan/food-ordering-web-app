import React from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = ({filteredRestaurants, allRestaurants }) => {

  const isOnline = useOnline();
  
  if(!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>
  }

  // not render component (Early return)
  if(!allRestaurants) return null;

 return (allRestaurants?.length === 0) ? <Shimmer/> : (
      <div className="res-list">
        {(filteredRestaurants?.length === 0) ? <h3>We're sorry, we couldn't find a restaurant with that name. Please try searching again with a different name.</h3> :
          filteredRestaurants?.map((restaurant) => <Link to={"/restaurants/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard  {...restaurant.data}/></Link>
          )
        }
      </div>
    );
  };
  export default Body;