import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
  
    return (
      <div className="res-card">
        <img className="res-logo" src="" alt="Biryani"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

export default RestaurantCard;