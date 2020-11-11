import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {
  render() {
    return (
        <Link to='/home/'>
        <h1>About</h1>
        </Link>
       
    );
  }
}

export default About;
