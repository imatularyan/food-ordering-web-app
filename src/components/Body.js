import React from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = ({filteredRestaurants, allRestaurants }) => {

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