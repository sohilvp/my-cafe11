import React from "react";
import "./header.css";
import heroImg from "../../assets/tinywow_cafe-eleven-hero-desktop_39422018.webp";
import heroText from "../../assets/cafe-eleven-logo-all-white.055b0e29.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={heroImg} alt="" />
      <div className="textContainer">
        <div className="textSupporter">
          <img src={heroText} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
