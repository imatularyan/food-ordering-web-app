import Logo from "../assets/img/logo.png";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <Link to="/" className="logo">
    <img className=" w-20" src={Logo} />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext)


  return (
    <div className="flex top-0 shadow-md sticky bg-white opacity-95 blur-0 h-16">
      <div className="flex items-center w-3/5 m-auto justify-between ">
        <Title />
        <nav className="text-zinc-800">
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
        <div className=" flex items-center gap-5" >
          <div className="flex text-base font-normal text-zinc-800 items-center">
            {
              (isLoggedIn) ? (<div className="flex items-center gap-5">
                <Link to="/profile" className="flex items-end gap-1 text-lg text-zinc-800">
                  <img className=" w-8" alt="user" src={User} />
                  <div className="">{user.name}</div>
                </Link>
                <Link to="/profile"><button
                  type="button"
                  className=" px-3 py-2 outline-1 outline-zinc-800 outline rounded-sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Log Out
                </button></Link> </div>
              ) :
                (<div className=" flex gap-3">
                  <Link to="/"><button
                    type="button"
                    className=" px-3 py-2 outline-1 outline-zinc-800 outline rounded-sm"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Log In
                  </button></Link>
                  <Link to="/profile/register"><button className=" px-3 py-2 outline-1 outline-zinc-800 outline rounded-sm" type="button">Sign Up</button></Link>
                </div>)
            }
          </div>
          <div className="cart">
            <Link className="flex items-end gap-1 text-base text-zinc-800" to="/cart">
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
