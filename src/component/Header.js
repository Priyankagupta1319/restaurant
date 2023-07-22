import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  //let buttonText="Logout"
  const[buttonText, setbuttonText] = useState("login")
  function updateloginlogout(){
    // buttonText = buttonText === "login" ? "logout" : "login"
    // console.log(buttonText)
    if(buttonText==="login"){
      setbuttonText("logout")
    } else
    {
      setbuttonText("login")
    }
  }

    return (
      <nav className="nav-bar">
        <img
          src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"
          alt="restaurant-logo"
        ></img>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
        <button className="login" onClick={updateloginlogout}>{buttonText}</button>
      </nav>
    );

  };
export default HeaderComponent;