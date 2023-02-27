import React from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = ({filteredRestaurants, allRestaurants }) => {

  if(!allRestaurants) return null;

 return (allRestaurants?.length === 0) ? <Shimmer/> : (
      <div className="restaurant-list">
        {(filteredRestaurants?.length === 0) ? <h3>We're sorry, we couldn't find a restaurant with that name. Please try searching again with a different name.</h3> :
          filteredRestaurants?.map((restaurant) => <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
          )
        }
      </div>
    );
  };
  export default Body;