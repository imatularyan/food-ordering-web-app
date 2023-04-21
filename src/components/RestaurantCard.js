import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="w-full sm:w-full md:w-[311px] lg:w-[276px] xl:w-72 2xl:w-[247px] p-4 mb-4 mt-1 mx-1 hover:outline outline-1 outline-gray-300 hover:shadow-md">
      <div className=" text-gray-700">
        <img
          className=" w-full h-full object-contain mb-2 border"
          alt="foodimg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <div className=" text-base font-medium break-words py-1">{name}</div>
        <div className=" text-xs font-light text-gray-500">
          {cuisines?.join(", ")}
        </div>
        <div className=" flex justify-between text-xs items-center mt-4 py-1 h-5">
          <div className="flex justify-center items-center gap-1 bg-green-500/90 text-white h-5 w-10">
            <span>⭑</span>
            <span>{avgRating}</span>
          </div>
          <div className=" font-bold text-gray-500">·</div>
          <div className=" text-xs font-light text-gray-600">
            {deliveryTime}MINS
          </div>
          <div className=" font-bold text-gray-500">·</div>
          <div className=" text-xs font-light text-gray-600">
            {costForTwoString}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
