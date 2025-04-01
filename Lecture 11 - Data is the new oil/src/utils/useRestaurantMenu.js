import { useEffect, useState } from "react";
import { MENU_API } from '../utils/constants';

// just a utility function
const useRestaurantMenu = (resId) => {
    // input : it gets a restro id
    // it has to fetch the data and give it to restro menu
    // output : it returns the restro info
    // react fetches data insside the useEffect

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]) // we want to fetch the data only once...so []

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo
}

export default useRestaurantMenu;
