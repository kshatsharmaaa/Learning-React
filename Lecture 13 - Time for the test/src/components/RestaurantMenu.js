import React, {useState, useEffect} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';

const RestaurantMenu = () => {

  // props drilling:
  const dummy = "Dummy data";

  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  // can i abstract my fetching data logic ?
  // customHook - this will fetch the data and give it to restro menu
  // hooks are normal js functions
  // best way to create custom hooks is to use use prefix and create it inside utils
  // file name as same as function name

  const resInfo = useRestaurantMenu(resId); // all the trouble of fetching data is handled by custom hook in useRestaurantMenu file

  const [showIndex, setShowIndex] = useState(0);

/*
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId + '&submitAction=ENTER');
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }
*/

    if(resInfo === null)return  <Shimmer/>;

    // destructuring:
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); // filter out the categories (@type)

    // console.log(categories);

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-semibold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
      {/* categories accordian  - controlled component*/}
      {categories.map((category, index ) => 
      <ResCategory 
      data={category?.card?.card} 
      key={category.card.card.title}
      showItems = {index === showIndex}
      setShowIndex = {() => setShowIndex(index)}
      dummy={dummy}
      />
      )}
    </div>
  )
}

export default RestaurantMenu;
