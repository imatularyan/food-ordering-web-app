import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className=" w-3/5 m-auto min-h-screen">
            <div className="flex justify-between mt-4">
                <h1 className="font-bold text-3xl">Cart - {cartItems.length}</h1>
                <button className="bg-red-100 p-2 m-2 rounded" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
        </div>
    )
};

export default Cart;