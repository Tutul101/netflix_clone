import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=35"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav__avatar"
        src="https://media.customon.com/unsafe/600x600/img.customon.com//art/2/600/600/0a0909/86739/3d4e4cd2d303960f1f6337bb587c2723.png.jpg"
        alt="Netflix Avatar"
      ></img>
    </div>
  );
};
