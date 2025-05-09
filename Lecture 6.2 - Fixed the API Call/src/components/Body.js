import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList); // Local State Variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);


  
  useEffect(() => {
    fetchData(); // now write this function
  }, []);

  const fetchData = async () => { 
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
    ); 
    const json = await data.json(); 
    console.log(json);
    // optional chaining - ?.
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  } 
  

  // loading screen - conditional rendering
  // if(listOfRestaurants.length === 0) return <Shimmer/> // Shimmer - Skeleton UI

  // combine the two returns -->

  return listOfRestaurants.length === 0 ?  <Shimmer/> : (
    <div className="body">
      <div className="filter">

      {/* Search functionality */}
      <div className="search">
      {/* the input box is bind to searchtext through value, which is empty string initially, if we try to enter anything via ui it wont change so this is why we need onChange */}
      {/*  this is done to update the search text */}
      {/* whenever we type anything in input box react is rerendering the whole body component but making changes only in input box */}
        <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        <button onClick={() => {
          // filter the restro cards and update the ui
          // find the input box
          // need the search text here 
          // get that value from input box
          // and bind that with a local state variable
          const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
          // setlistOfRestaurants(filteredRestaurant); this is wrong coz it only works for one time then u search again and it starts searching from already filtered resto
          setFilteredRestaurant(filteredRestaurant); // initiallyit wont show anything if u put [] in case of api calls and u have to add setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards); to the fetchdata function to render it but as the apinot working i think im gonna use reslist as initial
        }}>Search</button>
      </div>

        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">

        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

      </div>
    </div>

  )
}

export default Body;