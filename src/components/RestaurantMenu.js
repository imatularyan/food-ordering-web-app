import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerMenu from "../components/ShimmerMenu";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantItems, restaurant] = useRestaurant(resId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className=" mt-2 min-h-screen">
      <div className=" sticky top-0 w-full bg-zinc-800">
        <div className="flex w-4/5 m-auto h-36 text-cyan-50">
          <img
            className=" object-contain h-32 m-auto outline outline-1 outline-gray-400"
            alt="resImg"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
          <div className=" flex m-auto flex-col gap-1 capitalize text-sm">
            <div>
              <span>Name: </span>
              {restaurant?.name}
            </div>
            <div>
              <span>Area: </span>
              {restaurant?.areaName}
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
              <span className="text-yellow-600">
                {" "}
                {restaurant?.costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/6 border-r border-l mx-auto px-4 h-full">
        {restaurantItems?.map((item) => (
          <div
            className=" flex w-full mx-auto shadow-sm border my-2 text-gray-800 rounded-sm items-center bg-white p-2"
            key={item?.card?.info?.id}
          >
            <div className=" w-1/4 h-fit border-2 border-gray-100 rounded-sm ">
              <img
                className="w-full object-contain rounded-sm"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
              />
            </div>
            <div className="text-right text-xs w-3/4 ml-2 h-fit">
              <span className=" font-normal">
                {item?.card?.info?.isVeg == 1 ? "Veg 🟢" : "Non-Veg 🔴"}
              </span>
              <div className="font-medium m-1">{item?.card?.info?.name}</div>
              {item?.card?.info?.description && (
                <span className=" break-words font-normal text-ellipsis overflow-hidden m-1">
                  {item?.card?.info?.description}
                </span>
              )}
              <div className=" text-sm font-medium text-yellow-600 m-1">
                ₹{item?.card?.info?.defaultPrice / 100}
              </div>
              <span className="m-1">
                <button
                  className=" bg-red-100 h-5 w-5 mr-1 shadow-sm"
                  onClick={() => removeFoodItem(item)}
                >
                  −
                </button>
                <button
                  data-testid="addBtn"
                  className=" bg-green-100 h-5 w-5 ml-1 shadow-sm"
                  onClick={() => addFoodItem(item)}
                >
                  +
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
