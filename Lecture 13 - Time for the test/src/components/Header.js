import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  // using local variable
  // let btnName = "Login"

  // using state variable
  const [btnNameReact, setBtnNameReact] = useState("Login"); // variable, fn to update this variable 

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //Selector - subscribing to the store using this
  const cartItems = useSelector((store) => store.cart.items); // we have subscribed to the store.cart.items a

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial render (just once)
  // if we put something in d array => it will only be called when the dependency changes
  // useEffect(() => {
  //   console.log("UseEffect is called")
  // }, [btnNameReact])

    return (
      <div className="flex justify-between shadow-xs ">
        <div className="logo-container">
          <img className="w-28" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✔" : "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          {/*     using local js variable      
            <button className="login" onclick={() => {btnName = "Logout"}}>{btnName}</button>
          */}
            <button className="px-4 login" onClick={() => {btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Logout")}}>{btnNameReact}</button>

            <li className="px-4 font-semibold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }


export default Header;