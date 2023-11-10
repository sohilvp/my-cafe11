import React, { useEffect, useRef } from "react";
import "./loader.css";
import logo from "../../assets/cafe-eleven-logo-all-white.055b0e28.svg";

const Loader = ({ loaderRef }) => {
  return (
    <div className="loaderContainer" ref={loaderRef}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Loader;
