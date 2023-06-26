import { IMG_CDN_URL } from "../constants";

const FoodItem = (Items) => {
  const { name, description, ratings, imageId, price } = Items.items.card.info;

  return (
    <div className=" text-zinc-900 mt-4 flex">
      <img
        className=" w-40 h-full object-contain border-2 border-gray-200"
        alt="foodimg"
        src={IMG_CDN_URL + imageId}
      />
      <div className="flex flex-col ml-5">
        <div className=" text-base font-medium mt-3">{name}</div>
        <div className="break-words font-light text-sm">{description}</div>
        <div className=" flex text-xs items-center mt-3 py-1 h-5 mr-auto">
          <div className="flex">
            <span>⭑</span>
            <span>{ratings?.aggregatedRating?.rating}</span>
          </div>
          <div className="ml-2">·</div>
          <div className="ml-2">·</div>
          <div className="ml-2">Rs.{price / 100}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
