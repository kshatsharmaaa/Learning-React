import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  // using local variable
  // let btnName = "Login"

  // using state variable
  const [btnNameReact, setBtnNameReact] = useState("login"); // variable, fn to update this variable 

  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called on initial render (just once)
  // if we put something in d array => it will only be called when the dependency changes
  // useEffect(() => {
  //   console.log("UseEffect is called")
  // }, [btnNameReact])

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "+" : "-"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
          {/*     using local js variable      
            <button className="login" onclick={() => {btnName = "Logout"}}>{btnName}</button>
          */}
            <button className="login" onClick={() => {btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")}}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }


export default Header;