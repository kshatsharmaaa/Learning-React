import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  // using local variable
  // let btnName = "Login"

  // using state variable
  const [btnNameReact, setBtnNameReact] = useState("login"); // variable, fn to update this variable 

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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