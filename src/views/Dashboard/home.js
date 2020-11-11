import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../shared/api';


class Home extends Component {



componentDidMount(){
 console.log( api.demo.demoAPI())
}


  render() {
    return (
        <Link to='/about'>
        <h1>home</h1>
        </Link>
       
    );
  }
}

export default Home;
