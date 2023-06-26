import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../assets/img/empty-cart.svg";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" w-10/12 mx-auto min-h-screen p-8 text-gray-900">
      <div className="">
        <div className="flex justify-between">
          <h1 className="font-medium text-base">
            <span className="bg-yellow-400 rounded-l py-1 px-2">
              {cartItems.length > 1 ? "Items" : "Item"}
            </span>
            <span className=" bg-gray-400 text-white py-1 px-2 rounded-r">
              {cartItems.length}
            </span>
          </h1>
          {cartItems.length > 0 && (
            <button
              className="bg-red-400 text-white p-1 rounded text-base"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          )}
        </div>
        {cartItems.length <= 0 ? (
          <div className=" my-56 font-light text-gray-900 text-lg flex flex-col justify-center items-center gap-4">
            <img width="80" src={emptyCart} />
            Your cart is empty!{" "}
          </div>
        ) : (
          cartItems?.map((item, index) => <FoodItem key={index} items={item} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
