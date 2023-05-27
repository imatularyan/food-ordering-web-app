import Logo from "../assets/img/logo.png";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/">
    <img data-testid="logo" className=" w-16" src={Logo} />
  </Link>
);

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full bg-[#fffdfa] sticky top-0 text-gray-700 font-normal shadow-sm">
      <div className="flex h-16 justify-between w-10/12 lg:w-10/12 mx-auto p-2">
        <Title />
        <ul className=" inline-flex overflow-hidden text-gray-700">
          <Link to="/">
            <li className=" p-3 text-orange-500 hover:text-orange-500/80">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" p-3 text-orange-500 hover:text-orange-500/80">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className=" p-3 text-orange-500 hover:text-orange-500/80">
              Contact
            </li>
          </Link>
          <Link to="/instamart">
            <li className=" p-3 text-orange-500 hover:text-orange-500/80">
              Instamart
            </li>
          </Link>
          <li className="flex items-center gap-2">
            <div className="flex font-normal items-center">
              <div className="text-blue-500 hover:text-blue-500/80 border-r border-l p-2 transition duration-100 ease-in-out">
                <Link to="/">
                  <button type="button">Log In</button>
                </Link>
              </div>
            </div>
            <div className="">
              <Link
                to="/cart"
                className="flex items-center gap-1 justify-center"
              >
                <img className=" w-6" alt="cart" src={carticon} />
                <span data-testid="cart">{cartItems.length}</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
