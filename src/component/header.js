import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
    render() {
      return (
        <header className="header-area">
            <div className="header-large-device">
                <div className="container">
                    <div className="header-ptb-2">
                        <div className="row align-items-center">
                            <div className="col-lg-10 col-sm-9">
                                <nav className="nabs">
                                    <ul>
                                        <li><a className="active" href="#">Customer Care</a></li>
                                        <li><a href="#">Login/Register</a></li>
                                        <li><a href="#">My Basket</a></li>
                                        
                                    </ul>
                                </nav>
                            </div>
                            
                            <div className="col-lg-2 col-sm-3">
                                <div className="header-right-wrap header-right-flex">
                                <div className="same-style same-style-font-dec same-style-mrg-dec-2">
                                        <a className="cart-active" href="#"><FontAwesomeIcon icon={faCartArrowDown} /></a>
                                    </div>
                                    <div className="same-style same-style-font-dec same-style-mrg-dec-2">
                                        <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
                                    </div>
                                     <div className="same-style same-style-font-dec same-style-mrg-dec-2">
                                        <a className="clickalbe-button-active" href="#">
                                        <FontAwesomeIcon icon={faUserCircle} /></a>
                                    </div>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                        <div className="mobile-logo mobile-logo-width">
                                <a href="index.html">
                                    <img alt="" src={require("../assets/images/logo/logo.png")}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="main-menu menu-lh-2 main-menu-padding-2 menu-text-black">
                                <nav>
                                    <ul>
                                        <li className="has-sub-menu active"><a href="#">SHOP</a> </li>
                                        <li className="has-sub-menu"><a href="#">HEALTH RESOURCES</a></li>
                                        <li className="has-sub-menu"><a href="#">ABOUT US</a></li>                              
                            
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
         
      );
    }
  }
export default Header;