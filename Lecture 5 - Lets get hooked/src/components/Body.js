import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList); //here reslist is the initial value
  // setlistOfRestaurants is the function to update the value of listOfRestaurants 
  // resList is the initial value of listOfRestaurants
  // listOfRestaurants is the state variable 
  //  whenever a state variable is updated, the component is re-rendered

  // alter way - array destructuring
  // const arr = useState(resList);
  // const [listOfRestaurants, setlistOfRestaurants] = arr;

  // normal js variable
  // let listOfRestaurants;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => { // onclick event and this takes a callback fn (arrow fn)
            // filter logic here
            const filteredList = listOfRestaurants.filter( //.filter usage 
              (res) => res.data.avgRating > 4 // this is the condition if this is true, the element is included
            );  // uptil here this is pure filter usgae
            setlistOfRestaurants(filteredList); // this is to reflect change in ui
          }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

      </div>
    </div>

  )
}

export default Body;