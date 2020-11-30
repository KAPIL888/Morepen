import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';
import Products from './views/Dashboard/products';
import Header from "./component/header";
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/themify-icons.css';
import './index.css';
import ProductDetail from './views/Dashboard/product-detail';

const routing = (
  <HashRouter >
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/products/:id' component={Products}></Route>
        <Route path='/product-detail/:productId' component={ProductDetail}></Route>
        <Route path='/about-us' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  </HashRouter>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);
