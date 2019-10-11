import React from "react";
import { LOGO_URL } from "../../common/constants/common";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartItem } from "../../actions/buyItemAction";
import i18next from "i18next";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = props => {
  const totalItem = props.totalItem;
  return (
    <header className="header">
      <div id="menu-hamburger">
        <SideBar right totalItem={totalItem} />
      </div>
      <figure className="header__logo" aria-label="logo">
        <NavLink to="/">
          <img src={LOGO_URL} alt="logo" />
        </NavLink>
      </figure>
      <section className="header__left">
        <nav role="navigation">
          <ul>
            <li>
              <NavLink className="btn" activeClassName="active-link" to="/home">
                {i18next.t("Home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                activeClassName="active-link"
                to="/product"
              >
                {i18next.t("Product")}
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="header__right">
        <nav role="navigation">
          <ul className="header__right--links">
            <li>
              <NavLink
                className="btn"
                activeClassName="active-link"
                to="/login"
              >
                {i18next.t("SignIn")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="btn"
                activeClassName="active-link"
                to="/register"
              >
                {i18next.t("Register")}
              </NavLink>
            </li>
          </ul>
        </nav>
        <button aria-pressed="false"
          aria-label={`total items in cart is ${totalItem}`} 
          className="header__right--bag"
          onClick={() => props.dispatch(toggleCartItem())}
        >
          <i className="fa fa-shopping-cart icon"></i>
          <span>
            {totalItem} {i18next.t("items")}
          </span>
        </button>
      </section>
    </header>
  );
};
const mapStateToProps = state => ({
  totalItem: state.cartItem.totalItem
});
export default connect(mapStateToProps)(Header);
