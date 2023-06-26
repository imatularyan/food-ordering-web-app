import icon from "../assets/img/icon.svg";
import User from "../assets/img/userIcon.svg";
import carticon from "../assets/img/cartIcon.svg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Title = () => (
  <Link to="/" className=" flex items-center gap-1 ">
    <img data-testid="logo" width="50" src={icon} />
    <span className=" text-2xl font-mono tracking-tighter">
      <span className=" text-2xl font-semibold tracking-tighter">E</span>at
      <span className=" text-2xl font-semibold ml-1 tracking-tighter">U</span>p
    </span>
  </Link>
);

const Header = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="w-full bg-white sticky top-0 text-gray-700 font-normal shadow-sm">
        <div className="flex h-16 justify-between w-10/12 lg:w-10/12 mx-auto p-2">
          <Title />
          <ul className=" inline-flex overflow-hidden text-gray-900">
            <Link to="/">
              <li className=" p-3 hover:text-yellow-600">Home</li>
            </Link>
            <Link to="/about">
              <li className=" p-3 hover:text-yellow-600">About</li>
            </Link>
            <Link to="/contact">
              <li className=" p-3 hover:text-yellow-600">Contact</li>
            </Link>
            <Link to="/help">
              <li className=" p-3 hover:text-yellow-600">Help</li>
            </Link>
            <li className="flex items-center gap-2">
              <div className="flex font-normal items-center">
                <div className=" font-medium text-yellow-600 hover:text-yellow-500 border-r border-l p-2 hover:border-blue-100 transition delay-75 duration-100 ease-in-out">
                  <button type="button" onClick={() => setLogin(!login)}>
                    Log In
                  </button>
                  {login && <Modal setLogin={setLogin} />}
                </div>
              </div>
              <Link
                to="/cart"
                className="flex items-center gap-1 justify-center"
              >
                <img className=" w-6" alt="cart" src={carticon} />
                <span data-testid="cart" className="h-6 w-6">
                  {cartItems.length > 0 && (
                    <div className="text-xs font-medium text-center text-white bg-gray-900 w-full h-full rounded-full p-1">
                      {cartItems.length}
                    </div>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
