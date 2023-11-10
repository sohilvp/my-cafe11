import React from "react";
import "./navbar.css";
import logo from "../../assets/cafe-eleven-logo-lettersOnly-black.svg";
import cafe from "../../assets/cafe-eleven-logo-oval-black.svg";
import henry from "../../assets/cafe-eleven-logo-hennessyOnly-black.svg";
const Navbar = () => {
  return (
    <div className="navContainer">
      <img className="logo" src={logo} alt="" />
      <img className="cafeLogo" src={cafe} alt="" />
      <div className="btn-container">
        <img src={henry} alt="" />
        <a href="#">sign up</a>
        <div>
          <a href="#">mint closed</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
