import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

const Navbar = ({cart}) => {
  return (
    <nav className="navbar">
      <div className="heading">
        <Link to="/">Welcome</Link>
      </div>
      <div className="links">
        <Link to="/login" class="login-link">Login</Link>
        <Link to="/cart">
          <i className="fa fa-2x fa-shopping-cart"></i>
          {cart !== null ? <span class='span'>{cart.total_items}</span> : ""}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
