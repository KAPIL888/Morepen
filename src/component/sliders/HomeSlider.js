import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider"


class HomeSlider extends Component {
 constructor(props){
     super(props)
     this.state={}
 }

  render() {
    let scientists=this.props.dataParentToChild.map((item, index) => 
    <div key={index} >
        <img alt={item.name} src={item.media[0].thumb} ></img>
        <p >{item.name}</p>
        <p >{item.name}</p>
    </div>
);
    return ({scientists});
  }
}
export default HomeSlider;