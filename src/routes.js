import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import About from './views/Dashboard/about';
import Home from './views/Dashboard/home';

class Routes extends Component {
  render() {
    return (
         <Router>
               <Route path='/home' component={Home}></Route>
               <Route path='/about' component={About}></Route>
         </Router>
       
    );
  }
}

export default Routes;
