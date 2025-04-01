import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250px] bg-slate-100 shadow-sm rounded-md hover:bg-slate-200">
        {/* bcoz cloudinary img id not working */}
        <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYQIOsl5L6namfbnmAuHDY-Y5FyuBIqPIKA&s" alt="CloudinaryImgId not working"/> 
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} </h4>
      </div>
    )
  }

export default RestaurantCard;