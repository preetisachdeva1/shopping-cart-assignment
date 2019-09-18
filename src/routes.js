import React from 'react';
import Home from './components/containers/home/ShoppingHome';
import ProductDetail from './components/containers/product/ProductDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => (
  <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product" component={ProductDetail} />
    </ Router>
  </div>
);

export default Routes;
