import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';
import Products from './views/Dashboard/products';
import Header from './views/Common/header';
import Footer from './views/Common/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import './index.css';

const routing = (
  <Router>
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root')
);
