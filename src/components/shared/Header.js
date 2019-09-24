import React from "react";
import { LOGO_URL } from "../../common/constants/common";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartItem } from "../../actions/buyItemAction";
import i18next from "i18next";

const Header = props => {
  const totalItem = props.totalItem;
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
            {i18next.t("Home")}
          </NavLink>

          <NavLink className="btn" activeClassName="active-link" to="/product">
          {i18next.t("Product")}
          </NavLink>
        </div>
      </div>
      <div className="nav-two">
        <div className="links">
          <NavLink className="btn" activeClassName="active-link" to="/login">
          {i18next.t("SignIn")}
          </NavLink>
          <NavLink className="btn" activeClassName="active-link" to="/register">
          {i18next.t("Register")}
          </NavLink>
        </div>
        <div
          className="item-bag"
          onClick={() => props.dispatch(toggleCartItem())}
        >
          <i className="fa fa-shopping-cart small-icon"></i>
          <span> {totalItem}  {i18next.t("items")}</span>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => ({
  totalItem: state.cartItem.totalItem
});
export default connect(mapStateToProps)(Header);
