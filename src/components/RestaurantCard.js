import { IMG_CDN_URL} from "../constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString}) => {
    return (
      <div className="card">
        <img
          alt="foodimg"
          src={
            IMG_CDN_URL + cloudinaryImageId}/>
        <div className="rest-name">{name}</div>
        <div className="rest-cuisines">{cuisines?.join(", ")}</div>
        <div className="wrap-data">
          <div className="star-rating">
        <span>⭑</span>
        <span>{avgRating}</span>
        </div>
        <div>·</div>
        <div>{deliveryTime}MINS</div>
        <div>·</div>
        <div>{costForTwoString}</div>
        </div>
      </div>
    ); 
  };

  export default RestaurantCard;