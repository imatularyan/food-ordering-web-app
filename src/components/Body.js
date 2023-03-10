import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import searchicon from "../assets/img/searchIcon.svg";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "../constants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(FETCH_RESTAURANT_URL);
    const json = await response.json();
    // optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards)
  }

  if (!isOnline)
    return <h1>🔴 Offline, please check your internet connection!!</h1>;

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <div className=" flex min-w-min w-3/5 items-start m-auto mt-3">
          <div className="flex border-2 border-b-slate-600 rounded w-44">
            <img className="ml-1 w-5" alt="searchicon" src={searchicon} />
            <input
              data-testid="search-inpt"
              type="text"
              className="text-lg font-light outline-none p-1 w-36"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            />
          </div>
        </div>
      </div>
      <div data-testid="res-list" className="flex min-w-min w-3/5 justify-items-stretch m-auto flex-wrap mt-3">
        {filteredRestaurants?.length === 0 ? (
          <h3>
            We're sorry, we couldn't find a restaurant with that name. Please
            try searching again with a different name.
          </h3>
        ) : searchText === "" ? (
          allRestaurants?.map((restaurant) => (
            <Link
              className=" w-52 px-3 pt-5 pb-5 mb-2 mx-1 mt-2 outline outline-1 outline-zinc-400"
              to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              className=" w-52 px-3 pt-3 pb-3 mb-2 mx-1 shadow-xl mt-2 outline outline-1 outline-zinc-400"
              to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
