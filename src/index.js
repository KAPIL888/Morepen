import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';
import Products from './views/Dashboard/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/themify-icons.css';
import './index.css';
import ProductDetail from './views/Dashboard/product-detail';
import Register from './views/Dashboard/register';
import Login from './views/Dashboard/login';
import RegisterOtp from './views/Dashboard/register-otp';
import MyAccount from './views/Dashboard/myaccount';

const routing = (
  <HashRouter >     
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/register-otp' component={RegisterOtp}></Route>
        <Route path='/myaccount' component={MyAccount}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/products/:id' component={Products}></Route>
        <Route path='/product-detail/:productId' component={ProductDetail}></Route>
        <Route path='/about-us' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
  </HashRouter>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);
