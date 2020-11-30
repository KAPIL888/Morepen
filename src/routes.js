import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';
import ProductDetail from './views/Dashboard/product-detail';
import Products from './views/Dashboard/products';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path='/home' component={Home}></Route>
        <Route path='/products/:id' component={Products}></Route>
        <Route path='/product-detail/:productId' component={ProductDetail}></Route>
        <Route path='/about-us' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </Router>
       
    );
  }
}

export default Routes;
