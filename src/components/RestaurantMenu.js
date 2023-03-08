import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);


  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" mt-2">
      <div className=" sticky top-0 w-full bg-zinc-800">
        <div className="flex w-3/5 m-auto h-44 text-cyan-50">
          <img className=" object-contain h-36 m-auto outline outline-1 outline-gray-400" alt="resImg" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <div className=" flex m-auto flex-col gap-1 capitalize">
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
              <span className="text-yellow-500"> {restaurant?.costForTwoMsg}</span>
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
              <div className="text-xs font-semibold">{(item?.isVeg == 1) ? "Veg 🟢" : "Non-Veg 🔴"}</div>
              <div className=" text-sm font-semibold">{item?.name}</div>
              <div className=" text-xs font-medium mt-1 break-words break-all">{item?.description}</div>
              <div className=" text-base font-semibold text-yellow-600 mt-1"> ₹{item?.price / 100}</div>
            </div>
            <div>
              <button className="p-2 bg-green-100" onClick={() => handleAddItem()}>Add Item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
