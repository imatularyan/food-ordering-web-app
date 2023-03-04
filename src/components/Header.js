import Logo from "../assets/img/logo.png";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import { useState, } from "react";
import {Link} from "react-router-dom";

const Title = () => (
  <Link to="/" className="logo">
    <img className=" w-20" src={Logo} />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  
  return (
    <div className="flex top-0 shadow-md sticky bg-white opacity-95 blur-0 h-16">
      <div className="flex items-center w-3/5 m-auto justify-between">
      <Title />
      <nav className="text-zinc-800">
        <ul className=" flex">
          <li className=" p-3">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-3">
            <Link to="/about">About</Link>
          </li>
          <li className=" p-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className=" p-3">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </nav>
      <div className=" flex items-center gap-8" >
      <div className="flex text-base font-normal text-zinc-800 gap-5 items-center">
        {
          (!isLoggedIn) ? 
          <Link to="/user">
            <img className=" w-8" alt="user" src={User} />
          </Link> : null
        }
        {isLoggedIn ? ( <button
            type="button"
            className=" px-3 py-2 outline-1 outline-zinc-800 outline rounded-sm"
            onClick={() => setIsLoggedIn(false)}
          >
            Log In
          </button> ) : (
          <button
            type="button"
            className=" px-3 py-2 outline-1 outline-zinc-800 outline rounded-sm"
            onClick={() => setIsLoggedIn(true)}
          >
            Log Out
          </button>
        )}
        </div>
        <div className="cart">
          <Link className="flex items-end gap-3 text-base text-zinc-800" to="/cart">
            <img className=" w-7" alt="cart" src={carticon} />
            <span>Cart</span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
