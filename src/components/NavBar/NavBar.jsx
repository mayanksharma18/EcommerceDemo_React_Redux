import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import MyCartContainer from "../../containers/MyCart/MyCartContainer";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="shopEver">
        ShopEver
      </Link>
      <div className="options">
        <Link to="/cart" className="cart">
        <MyCartContainer />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
