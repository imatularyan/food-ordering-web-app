import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" mt-2 min-h-screen">
      <div className=" sticky top-0 w-full bg-zinc-800">
        <div className="flex w-3/5 m-auto h-36 text-cyan-50">
          <img className=" object-contain h-32 m-auto outline outline-1 outline-gray-400" alt="resImg" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <div className=" flex m-auto flex-col gap-1 capitalize text-sm">
            <div>
              <span>Name: </span>
              {restaurant?.name}
            </div>
            <div>
              <span>Area: </span>
              {restaurant?.area}
            </div>
            <div>
              <span>City: </span>
              {restaurant?.city}
            </div>
            <div>
              <span>Rating: </span>
              {restaurant?.avgRating}★
            </div>
            <div>
              <span>Price:</span>
              <span className="text-yellow-600"> {restaurant?.costForTwoMsg}</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl m-auto">
        <div className=" capitalize text-center font-bold text-xl text-zinc-600">The Menu</div>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className=" flex w-2/4 my-4 mx-auto pt-5 border-t-2 gap-4" key={item?.id}>
            <div className=" w-fit h-fit">
              <img className=" w-40 object-contain max-w-none outline outline-2 outline-zinc-300 rounded-sm" src={IMG_CDN_URL + item?.cloudinaryImageId} />
            </div>
            <div className=" flex flex-col flex-auto text-right">
              <div className=" text-xs font-medium">{(item?.isVeg == 1) ? "Veg 🟢" : "Non-Veg 🔴"}</div>
              <div className=" text-xs font-medium">{item?.name}</div>
              <div className=" text-xs mt-1 break-words break-all">{item?.description}</div>
              <div className=" text-base font-medium text-yellow-600 mt-1"> ₹{item?.price / 100}</div>
              <div className=" flex justify-between mt-2 ml-auto h-5 items-center">
                <button className="p-1 bg-red-100" onClick={() => removeFoodItem()}>−</button>
                <div className=" w-7"></div>
                <button className="p-1 bg-green-100" onClick={() => addFoodItem(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
