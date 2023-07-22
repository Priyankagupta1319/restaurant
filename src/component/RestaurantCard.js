import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";

const RestaurantCard = (props) => {

  const {name,cuisines,costForTwo,costForTwoString, deliveryTime, cloudinaryImageId} = props.restaurants;
    return (
    <div className="restaurant-card">
      <img
        src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`}
        alt="rest-pic"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>

      <div className="res-info">
        <h4>{costForTwo}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
