import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider"


class HomeSlider extends Component {
 constructor(props){
     super(props)
     this.state = {
        Scientists: {
            "items": [
                {
                    "imgSrc": "assets/images/slider/p1.png",
                    "name": "A powerful disinfectant",
                    "des": "19 February 1473 – 24 May 1543"
                },
                {
                    "imgSrc": "assets/images/slider/p3.png",
                    "name": "Immediate relief from<div>1<sup>st</sup> degree burns</div>",
                    "des": "15 February 1564 – 8 January 1642"
                },
                {
                    "imgSrc": "assets/images/slider/p2.png",
                    "name": "24hrs tonic for mens!",
                    "des": "22 September 1791 – 25 August 1867"
                },
                {
                    "imgSrc": "assets/images/slider/p1.png",
                    "name": "A powerful disinfectant",
                    "des": "19 February 1473 – 24 May 1543"
                },
                {
                    "imgSrc": "assets/images/slider/p3.png",
                    "name": "Immediate relief from<div>1<sup>st</sup> degree burns</div>",
                    "des": "15 February 1564 – 8 January 1642"
                },
                {
                    "imgSrc": "assets/images/slider/p2.png",
                    "name": "24hrs tonic for mens!",
                    "des": "22 September 1791 – 25 August 1867"
                }
            ]
        }
     }
 }

  render() {

    let itemsStyle = {
        padding: "0px",
        background: "white",
        margin:"0 30px",
        boxShadow: "1px 1px 1px 1px #9E9E9E",
        borderRadius: "4px"
    };

    let imgStyle = {
        height: "70%",
        borderBottom: "1px solid #9E9E9E"
    };
    
    let textBoxStyle = {
        width: "40%",
        top: "290px",
        color: "black",
        background: "transparent",
        fontSize: "14px",
        fontFamily: "Times New Roman"
    };

    let textBoxStyle2 = {
        width: "70%",
        top: "330px",
        color: "black",
        background: "transparent",
        fontSize: "12px",
        fontStyle: "italic"
    };

    let scientists = this.state.Scientists.items.map((item, index) => 
        <div key = {index} >
            <img style = {imgStyle} src ={require(`../../${item.imgSrc}`)} ></img>
            <p style = {textBoxStyle} >{item.name}</p>
            <p style = {textBoxStyle2} >{item.des}</p>
        </div>
    );

    let btnWrapperStyle = {
        position: "relative",
        borderRadius: "50%",
        height: "50px",
        width: "50px",
        boxShadow: "1px 1px 1px 1px #9E9E9E",
        textAlign: "center"
    }

    let btnStyle = {
        display: "inline-block",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "36px"
    }

    let rBtnCpnt = (<div style = {btnWrapperStyle} >
        <div style = {btnStyle} className = "material-icons" >-</div>
    </div>);

    let lBtnCpnt = (<div style = {btnWrapperStyle} >
        <div style = {btnStyle} className = "material-icons" >-</div>
    </div>);        
    
    let scientistsCard = (<CarouselSlider 
        sliderBoxStyle = {{height: "450px", width: "80%", background: "transparent"}} 
        accEle = {{dots: false}}
        slideCpnts = {scientists} 
        itemsStyle = {itemsStyle} 
        buttonSetting = {{placeOn: 'middle-outside'}}
        rBtnCpnt = {rBtnCpnt}
        lBtnCpnt = {lBtnCpnt}
    />);

    return (
      <div style = {{position:"relative", margin: "0 auto", width: "95%"}} >
                                {scientistsCard}
                            </div>
    );
  }
}
export default HomeSlider;