import React, {useState, useEffect} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
// import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  // can i abstract my fetching data logic ?
  // customHook - this will fetch the data and give it to restro menu
  // hooks are normal js functions
  // best way to create custom hooks is to use use prefix and create it inside utils
  // file name as same as function name

  const resInfo = useRestaurantMenu(resId); // all the trouble of fetching data is handled by custom hook in useRestaurantMenu file

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
    // console.log(itemCards)

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>This is the menu</h2>
      <ul>
        {itemCards.map(item => (<li key ={item.card.info.id}>{item.card.info.name} -
           ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
      </ul>
    </div>
  )
}

export default RestaurantMenu;
