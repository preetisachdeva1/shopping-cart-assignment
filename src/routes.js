import React from "react";
import Home from "./components/containers/home/ShoppingHome";
import ProductDetail from "./components/containers/product/ProductDetail";
import Login from "./components/containers/login/loginForm";
import Registration from './components/containers/register/Registration';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from "./components/containers/modal/modal";
import { connect } from "react-redux";

const Routes = props => (
  <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route  path="/home" component={Home} />
      <Route  path="/product" component={ProductDetail} />
      <Route  path="/login"  component={Login} />
      <Route path="/register" component={Registration} />
    </Router>
    {props.toogleModal && <Modal />}
  </div>
);

const mapStateToProps = state => ({
  toogleModal: state.cartItem.toogleModal
});

export default connect(mapStateToProps)(Routes);
