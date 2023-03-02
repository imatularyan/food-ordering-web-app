import Logo from "../assets/img/logo.png";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import searchicon from "../assets/img/searchIcon.svg";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";

// SPA - Single Page Application
// Client Side Routing

const loggedInUser = () => {
  return true;
};

const Title = () => (
  <a href="/" className="logo">
    <img src={Logo} />
  </a>
);

// Composing components
const Header = ({
  setFilteredRestaurants,
  setAllRestaurants,
  allRestaurants,
}) => {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="wrapper">
      <div className="header">
      <Title />
      <div className="search-field">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="search"
          className="search-button"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of the restaurants
            setFilteredRestaurants(data);
          }}
        >
          <img alt="searchicon" src={searchicon} />
        </button>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </nav>
      <div className="user-container">
      <div className="user">
        {
          !isLoggedIn ? 
          <Link to="/user">
            <img alt="user" src={User} />
          </Link> : null
        }
        {isLoggedIn ? ( <button
            type="button"
            className="login-btn"
            onClick={() => setIsLoggedIn(false)}
          >
            Log In
          </button> ) : (
          <button
            type="button"
            className="login-btn"
            onClick={() => setIsLoggedIn(true)}
          >
            Log Out
          </button>
        )}
        </div>
        <div className="cart">
          <Link to="/cart">
            <img alt="cart" src={carticon} />
            <span>Cart</span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
