import Logo from "../assets/img/logo.png";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/" className="logo">
    <img data-testid="logo" className=" w-16" src={Logo} />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex sticky top-0 bg-white h-14 items-center justify-between w-10/12 lg:w-10/12 m-auto">
      <Title />
      <nav className="text-zinc-900">
        <ul className=" flex overflow-hidden">
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
      <div className=" flex items-center gap-5">
        <div className="flex text-base font-normal text-zinc-800 items-center">
          {isLoggedIn ? (
            <div className=" flex gap-3">
              <Link to="/">
                <button
                  type="button"
                  className=" p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Log In
                </button>
              </Link>
              <Link to="/profile/register">
                <button
                  className=" p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  type="button"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link
                to="/profile"
                className="flex items-end gap-1 text-zinc-800"
              >
                <img className=" w-8" alt="user" src={User} />
                <div className="">{user.name}</div>
              </Link>
              <Link to="/profile">
                <button
                  data-testid="logout-status"
                  type="button"
                  className=" p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Log Out
                </button>
              </Link>{" "}
            </div>
          )}
        </div>
        <div className="cart">
          <Link
            className="flex items-end gap-1 text-sm text-zinc-800"
            to="/cart"
          >
            <img className=" w-7" alt="cart" src={carticon} />
            <span>Cart</span>
            <span data-testid="cart">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
