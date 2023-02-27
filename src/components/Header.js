import Logo from "../..//assets/logo.png";
import User from "../..//assets/userIcon.svg";
import carticon from "../..//assets/cartIcon.svg";
import searchicon from "../..//assets/searchIcon.svg";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants?.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
};

const loggedInUser = () => {

  return true;
};

// const registerUser = () => {
//   return true;
// }

const Title = () => (
  <a href="/" className="logo">
    <img src={Logo} />
  </a>
);

// Composing components
const Header = ({setFilteredRestaurants, setAllRestaurants, allRestaurants}) => {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [registerUser, setRegisterUser] = useState(true)

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6674666&lng=73.8896529&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  return (
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
            // filter data
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <img alt="searchicon" src={searchicon} />
        </button>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
        </ul>
      </nav>
      
      <div className="right-container">
        <div className="user-icon">
          <a href="/">
            <img alt="user" src={User} />
          </a>
        </div>
        {
        registerUser && isLoggedIn ?  
        <button
        type="button"
        className="login-btn"
        onClick={() => setIsLoggedIn(false)}
      >
        Log In
      </button> : <button
          type="button"
          className="login-btn"
          onClick={() => setIsLoggedIn(true)}
        >
          Log Out
        </button>
        }
        
      </div>
      <div className="cart-icon">
          <a href="#">
            <img alt="cart" src={carticon} />
          </a>
        </div>
      </div>
  );
};

export default Header;
