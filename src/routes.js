import React, { Component } from 'react';
import {
  HashRouter,
    Route,
  } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';
import ProductDetail from './views/Dashboard/product-detail';
import Products from './views/Dashboard/products';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/home' component={Home}></Route>
        <Route path='/products/:id' component={Products}></Route>
        <Route path='/product-detail/:productId' component={ProductDetail}></Route>
        <Route path='/about-us' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </HashRouter>
       
    );
  }
}

export default Routes;
