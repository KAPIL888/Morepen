import React, { Component } from 'react';
import api from '../../shared/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            categroyDetails: this.props.location.data,
            productsList: [],
            activeGrid:'shop-2' 
        }
    }
    getProductsList = async () => {
        const search = this.state.categroyDetails ? 'category_id:' + this.state.categroyDetails.id : '';
        let response = await api.products.getProductsByCategory(search)
        this.setState({
            productsList: response.data.data            
        })
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    changeGrid =(gridName) => {
        console.log(gridName);
    }
    componentDidMount(){
        this.getProductsList();
        this.scrollToTop();
    }
  render() {
    return (
    <div>
        <div className="shop-area section-padding-1  pb-120">
        <div className="container-fluid">
        <div className="tab-content jump-3 pt-30">
        <div id="shop-2" className="tab-pane active">
        <div className="row">
        <div className="col-lg-3">
                        <div className="shop-sidebar-style mt-15">
                            <div className="sidebar-widget">

                                <h4 className="pro-sidebar-title">Categories </h4>
                                <div className="sidebar-widget-categories  mt-50">
                                    <ul>
                                        <li className="sw-sub-wrap"><a href="#">Hygiene<span class="menu-expand"><FontAwesomeIcon icon={faAngleDown}/></span></a>
                                            <ul className="sw-sub-menu">
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Jumpsuits</a></li>
                                                <li><a href="#">Shirts</a></li>
                                                <li><a href="#">T-shirts and tops</a></li>
                                            </ul>
                                        </li>
                                        <li className="sw-sub-wrap"><a href="#">Nutrition & Prevention<span class="menu-expand"><FontAwesomeIcon icon={faAngleDown}/></span></a>
                                            <ul className="sw-sub-menu">
                                                <li><a href="#">T-shirts and tops</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Cure</a></li>
                                    </ul>
                                </div>
                            </div>
                             <div className="sidebar-widget ">
                                <div className="panel-group" id="accordion">
                                <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion1" href="#faq-accordion1" aria-expanded="false">
                                                CONCERNS
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion1" data-parent="#accordion" className="panel-collapse collapse">
                                        <div className="panel-body">
                                           
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion3" href="#faq-accordion3">
                                                QUANTITY
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion3" data-parent="#accordion" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            
                                        </div>
                                    </div>
                                </div>
                               <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion1" href="#faq-accordion1" aria-expanded="false">
                                                prices
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion1" data-parent="#accordion" className="panel-collapse collapse" >
                                        <div className="panel-body">
                                           
                                        </div>
                                    </div>
                                </div>
                                
                               
                            </div>
                            </div>
                            <div className="sidebar-widget mb-15">
                                <div className="price-filter mt-0s">
                                    <div id="slider-range"></div>
                                    <div className="price-slider-amount">
                                        <div className="price-slider-amount">
                                            <button type="button">Filter</button>
                                            <div className="label-input">
                                                <span>Price: </span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion3" href="#faq-accordion3">
                                                COMBO
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion3" data-parent="#accordion" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            
                                        </div>
                                    </div>
                                </div>
                                 <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion3" href="#faq-accordion3">
                                                BEST SELLERS
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion3" data-parent="#accordion" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            
                                        </div>
                                    </div>
                                </div>
                                 <div className="panel faq-accordion">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-target="#faq-accordion3" href="#faq-accordion3">
                                                NEW ARRIVALS
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="faq-accordion3" data-parent="#accordion" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            
                                        </div>
                                    </div>
                                </div>
                          
                        </div>
                    </div>
        <div className="d-flexwrap flex-wrapwrap col-lg-9">
            <div className="shop-top-bar">
                <div className="shop-top-bar-right">
                    <div className="shop-tab nav">
                        <a href="#shop-1" data-toggle="tab"><i className=" ti-view-list-alt "></i></a>
                        <a href="#shop-2" className="active" data-toggle="tab"><i className=" ti-layout-grid4"></i></a>
                        <a href="#shop-3" data-toggle="tab"><i className="ti-layout-grid2"></i></a>
                    </div>
                    <span>Showing 1-15 of 26 results</span><span>Sort by:</span><div className="shop-short-by ml-40">
                        <span>Default sorting <FontAwesomeIcon icon={faAngleDown}/></span>
                        <ul>
                            <li className="active"><a href="#">Default sorting</a></li>
                            <li><a href="#">Sort by popularity</a></li>
                            <li><a href="#">Sort by average rating</a></li>
                            <li><a href="#">Sort by latest</a></li>
                            <li><a href="#">Sort by price: low to high</a></li>
                            <li><a href="#">Sort by price: high to low</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            {this.state.productsList.map((value, key) => {
            return <div className="col-xs-4 col-sm-4 col-md-4">
                <div className="product c1">
                    <div className="action_list">
                        <a href="#"><img src={require("../../assets/images/logo/carticon.png")} alt=''/></a>
                        <a href="#"><img src={require("../../assets/images/logo/wish.png")} alt=''/></a>
                    </div>
                    <img src={require("../../assets/images/slider/p1.png")} alt=''/>
                    <span>A powerful disinfectant</span>
                    <div className="product-content">
                        <h4><a href="product-details.html">Acer Aspire  Desktop</a></h4>
                        <div className="product-price">
                            <span className="new-price">$50.99</span>
                        </div>
                    </div>
                </div>
            </div>
        })}
        
        
        <div className="pro-pagination-style mt-30 text-center">
            <ul>
                <li><a className="active" href="#">01</a></li>
                <li><a href="#">02</a></li>
                <li><a href="#">Next</a></li>
            </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    <div className="bookstore-area bg-img ">
        <div className="container-fluid">
            <div className="section-title-4 text-center mb-55">
                <h2>Dr. Morepen on Social</h2>
                
            </div>
           
        </div>
        <div className="service-area    pb-35">
        <div className="container-fluid">
            <div className="row">                  
               <img src={require("../../assets/images/slider/insta.png")} alt=''/>
            </div>
        </div>
    </div>
    </div>
    <div className="slider-area mb-50">
        <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex subscribe-footer-style">

          <div className="container text-center">
<h2> Get personalized guidance, deals, freebies and Consult Doctors</h2>
            <a href="#" className="btn common_bt mt-20">SUBSCRIBE TO UPDATE</a>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Products;
