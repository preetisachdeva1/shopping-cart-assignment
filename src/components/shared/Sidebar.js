import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import { toggleCartItem } from "../../actions/buyItemAction";

import { connect } from "react-redux";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      // Pass on our props
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        {...this.props}
      >
        <a
          onClick={() => {
            this.closeMenu();
            this.props.dispatch(toggleCartItem());
          }}
        >
          <div className="menu-item item-bag">
            <i className="fa fa-shopping-cart small-icon"></i>
            <span>
              {this.props.totalItem} {i18next.t("items")}
            </span>
          </div>
        </a>

        <NavLink className="menu-item" activeClassName="active-link" to="/home">
          {i18next.t("Home")}
        </NavLink>

        <NavLink
          className="menu-item"
          activeClassName="active-link"
          to="/product"
        >
          {i18next.t("Product")}
        </NavLink>

        <NavLink
          className="menu-item"
          activeClassName="active-link"
          to="/login"
        >
          {i18next.t("SignIn")}
        </NavLink>

        <NavLink
          className="menu-item"
          activeClassName="active-link"
          to="/register"
        >
          {i18next.t("Register")}
        </NavLink>
      </Menu>
    );
  }
}
export default connect()(Sidebar);
