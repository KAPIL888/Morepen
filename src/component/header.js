import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import {getUserInfo} from '../shared/helpers';
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo:null
        }
    }
    setUserInfo = () =>{
        this.setState({
         userInfo:getUserInfo()
        })
    }
    logout(){
        console.log("isclicked")
        localStorage.clear();
        this.setState({
            userInfo:null
        });
       window.location.reload()
    }
    componentDidMount(){
     
    
       this.setUserInfo();
    }
 
      
    render() {
      return (
        <header className="header-area">
            <div className="header-large-device">
                <div className="container">
                    <div className="header-ptb-2">
                        <div className="row align-items-center">
                            <div className="col-lg-11 col-sm-9">
                                <nav className="nabs">
                                    <ul>
                                        <li><a className="active" href="#">Customer Care</a></li>
                                        <li>
                                            {
                                             this.state.userInfo!=null?<a onClick={() => {this.logout();}} href="javascript:void(0);">Logout</a>:<Link to={{pathname: "/login"}} >Login/Register</Link>
                                            }
                                            </li>
                                        <li><a href="#">My Basket <FontAwesomeIcon icon={faCartArrowDown} /></a></li>
                                        
                                    </ul>
                                </nav>
                            </div>
                            
                            <div className="col-lg-1 col-sm-3">
                                <div className="header-right-wrap header-right-flex">
                                <div className="same-style same-style-font-dec same-style-mrg-dec-2">
                                        <a className="cart-active" href="#"></a>
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
                            <Link to={{
                                pathname: "/home"}} >
                                <img alt="" src={require("../assets/images/logo/logo.png")} />
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="main-menu menu-lh-2 main-menu-padding-2 menu-text-black">
                                <nav>
                                    <ul>
                                        <li className="has-sub-menu active"><a href="#">SHOP</a> </li>
                                        <li className="has-sub-menu"><a href="#">HEALTH RESOURCES</a></li>
                                        <li className="has-sub-menu">
                                              <Link to={{
                                                  pathname: "/about-us"
                                              }} >ABOUT US</Link></li>                              
                            
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