import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList); // Local State Variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  // console.log("hi ", listOfRestaurants);
  
  useEffect(() => {
    fetchData(); // now write this function
  }, []);

  const fetchData = async () => { 
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
      // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
    ); 
    const json = await data.json(); 
    
    // optional chaining - ?.
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  } ;

  // network tab - choose offline
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet.</h1>
  
  const {loggedInUser, setUserName} = useContext(UserContext)


  // loading screen - conditional rendering
  // if(listOfRestaurants.length === 0) return <Shimmer/> // Shimmer - Skeleton UI

  // combine the two returns -->

  return listOfRestaurants.length === 0 ?  <Shimmer/> : (
    <div className="body">
      <div className="flex">

      {/* Search functionality */}
      <div className="m-4 p-4">
      {/* the input box is bind to searchtext through value, which is empty string initially, if we try to enter anything via ui it wont change so this is why we need onChange */}
      {/*  this is done to update the search text */}
      {/* whenever we type anything in input box react is rerendering the whole body component but making changes only in input box */}
        <input type="text" className="border border-solid border-black shadow-md rounded-md" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        <button className="px-4 py-0.5 bg-green-100 m-4 rounded-lg shadow-md" onClick={() => {
          // filter the restro cards and update the ui
          // find the input box
          // need the search text here 
          // get that value from input box
          // and bind that with a local state variable
          const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          // setlistOfRestaurants(filteredRestaurant); this is wrong coz it only works for one time then u search again and it starts searching from already filtered resto
          setFilteredRestaurant(filteredRestaurant); // initiallyit wont show anything if u put [] in case of api calls and u have to add setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards); to the fetchdata function to render it but as the apinot working i think im gonna use reslist as initial
        }}>Search</button>

        <button
          className="px-4 py-0.5 bg-gray-100 m-4 rounded-lg shadow-md"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="m-4 px-4 py-8">
        {/* this is to modify username */}
        <label htmlFor="">UserName:  </label>
        <input type="text" className=" px-1 border border-solid border-black shadow-md rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>

      </div>

        
      </div>

      <div className="flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
          // key is used to give a unique id to each element and should be written inside the parent
          <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
            {/* if the restaurant is open add a open label to it */
            restaurant.info.isOpen ? <RestaurantCardOpen resData={restaurant}/> : <RestaurantCard  resData={restaurant} />
            }
            </Link>
        ))}

      </div>
    </div>

  )
}

export default Body;