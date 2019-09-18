import React from "react";
//var Diamond = require('../../assets/img/logo.png');
import { LOGO_URL } from "../../common/constants/common";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className="main-header">
      <div className="logo">
        <NavLink to="/">
          <img src={LOGO_URL} alt="logo" />
        </NavLink>
      </div>
      <div className="header-nav">
        <div className="nav-one">
          <NavLink className="btn" activeClassName="active-link" to="/home">
            Home
          </NavLink>

          <NavLink className="btn" activeClassName="active-link" to="/product">
            Product
          </NavLink>
        </div>
      </div>
      <div className="nav-two">
        <div className="links">
          <span>
            <a className="btn" href="/login">
              SignIn
            </a>
          </span>
          <span>
            <a className="btn" href="/register">
              Register
            </a>
          </span>
        </div>
        <div className="item-bag">
          <i className="fa fa-shopping-cart small-icon"></i>
          <span> 0 items</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
