import React from "react";
//var Diamond = require('../../assets/img/logo.png');
import { LOGO_URL }  from '../../common/constants/common';


const Header = props => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="header-nav">
        <div className="nav-one">
          <a className="btn" href="#">
            Home
          </a>
          <a className="btn" href="#">
            Products
          </a>
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
