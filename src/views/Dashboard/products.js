import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Products extends Component {
  render() {
    return (
      <div>
      <div className="shop-area section-padding-1 pt-120 pb-120">
      <div className="container-fluid">
          <div className="shop-top-bar">
              <div className="shop-top-bar-left">
                  <div className="shop-page-list">
                      <ul>
                          <li>Show</li>
                          <li className="active"><a href="#">9</a> /</li>
                          <li><a href="#">12</a> / </li>
                          <li><a href="#">18</a> / </li>
                          <li><a href="#">24</a></li>
                      </ul>
                  </div>
              </div>
              <div className="shop-top-bar-right">
                  <div className="shop-tab nav">
                      <a href="#shop-1" data-toggle="tab"><i className=" ti-view-list-alt "></i></a>
                      <a href="#shop-2" className="active" data-toggle="tab"><i className=" ti-layout-grid4"></i></a>
                      <a href="#shop-3" data-toggle="tab"><i className="ti-layout-grid3"></i></a>
                  </div>
                  <div className="shop-short-by ml-40">
                      <span>Default sorting <i className="fa fa-angle-down angle-down"></i></span>
                      <ul>
                          <li className="active"><a href="#">Default sorting</a></li>
                          <li><a href="#">Sort by popularity</a></li>
                          <li><a href="#">Sort by average rating</a></li>
                          <li><a href="#">Sort by latest</a></li>
                          <li><a href="#">Sort by price: low to high</a></li>
                          <li><a href="#">Sort by price: high to low</a></li>
                      </ul>
                  </div>
                  <div className="shop-filter ml-25">
                      <a className="shop-filter-active" href="#">Filters <i className="fa fa-angle-down angle-down"></i></a>
                  </div>
              </div>
          </div>
          <div className="product-filter-wrapper">
              <div className="row">
                  
                  <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                      <div className="product-filter">
                          <h5>Price</h5>
                          <div className="price-filter">
                              <ul>
                                  <li><a href="#">$0.00 - $20.00</a></li>
                                  <li><a href="#">$20.00 - $40.00</a></li>
                                  <li><a href="#">$30.00 - $50.00</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                      <div className="product-filter">
                          <h5>Size</h5>
                          <div className="product-size">
                              <ul>
                                  <li><a href="#">Full Size</a></li>
                                  <li><a href="#">L</a></li>
                                  <li><a href="#">M</a></li>
                                  <li><a href="#">S</a></li>
                                  <li><a href="#">XL</a></li>
                                  <li><a href="#">XXL</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                      <div className="product-filter">
                          <h5>Color</h5>
                          <div className="product-color">
                              <ul>
                                  <li><a href="#">Blue</a></li>
                                  <li><a href="#">Brown</a></li>
                                  <li><a href="#">Green</a></li>
                                  <li><a href="#"> Pink</a></li>
                                  <li><a href="#">Violet</a></li>
                                  <li><a href="#"> White</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                      <div className="product-filter">
                          <h5>Brands</h5>
                          <div className="product-brands">
                              <ul>
                                  <li><a href="#">Airi</a></li>
                                  <li><a href="#">Draven</a></li>
                                  <li><a href="#">Mango</a></li>
                                  <li><a href="#"> Valentino</a></li>
                                  <li><a href="#">Zara </a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="tab-content jump-3 pt-30">
              <div id="shop-1" className="tab-pane padding-55-row-col">
                  <div className="shop-list-wrap mb-50">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <div className="product-wrap">
                                  <div className="product-img pro-theme-color-border product-border">
                                      <a href="product-details.html">
                                          <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                      </a>
                                      <div className="shop-list-quickview">
                                          <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                              <div className="shop-list-content">
                                  <h3><a href="#">Adapt Active Noise Cancelling Headphones</a></h3>
                                  <div className="pro-list-price">
                                      <span>$50.00</span>
                                  </div>
                                  <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam libero ac turpis pharetra, in vehicula scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                  <div className="product-list-action">
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <div className="pro-list-actioncart">
                                          <a title="Add to cart" href="#">Add to cart</a>
                                      </div>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="shop-list-wrap mb-50">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <div className="product-wrap">
                                  <div className="product-img pro-theme-color-border product-border">
                                      <a href="product-details.html">
                                          <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                      </a>
                                      <div className="shop-list-quickview">
                                          <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                              <div className="shop-list-content">
                                  <h3><a href="#">iPhone 11 Case, Heavy Duty [Military Grade] </a></h3>
                                  <div className="pro-list-price">
                                      <span>$50.00</span>
                                  </div>
                                  <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam libero ac turpis pharetra, in vehicula scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                  <div className="product-list-action">
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <div className="pro-list-actioncart">
                                          <a title="Add to cart" href="#">Add to cart</a>
                                      </div>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="shop-list-wrap mb-50">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <div className="product-wrap">
                                  <div className="product-img pro-theme-color-border product-border">
                                      <a href="product-details.html">
                                          <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                      </a>
                                      <div className="shop-list-quickview">
                                          <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                              <div className="shop-list-content">
                                  <h3><a href="#">Libratone Track Air+ True Wireless Active Noise</a></h3>
                                  <div className="pro-list-price">
                                      <span>$50.00</span>
                                  </div>
                                  <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam libero ac turpis pharetra, in vehicula scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                  <div className="product-list-action">
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <div className="pro-list-actioncart">
                                          <a title="Add to cart" href="#">Add to cart</a>
                                      </div>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="shop-list-wrap mb-50">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <div className="product-wrap">
                                  <div className="product-img pro-theme-color-border product-border">
                                      <a href="product-details.html">
                                         <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                      </a>
                                      <div className="shop-list-quickview">
                                          <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                              <div className="shop-list-content">
                                  <h3><a href="#">Acer Aspire C24-865-UA91 AIO Desktop</a></h3>
                                  <div className="pro-list-price">
                                      <span>$50.00</span>
                                  </div>
                                  <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam libero ac turpis pharetra, in vehicula scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                  <div className="product-list-action">
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <div className="pro-list-actioncart">
                                          <a title="Add to cart" href="#">Add to cart</a>
                                      </div>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="shop-2" className="tab-pane active padding-55-row-col">
                  <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                     <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Adapt Active Noise Cancelling Headphones</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$59.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iPhone 11 Case, Heavy Duty [Military Grade] </a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$20.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Libratone Track Air+ True Wireless Active Noise</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$59.99</span>
                                      <span className="new-price">$35.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                     <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Acer Aspire C24-865-UA91 AIO Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$50.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iBUYPOWER Gaming PC Computer Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                     <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Andoer Gimbal 3-Axis Handheld Stabilizer</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$70.99</span>
                                      <span className="new-price">$66.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                     <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Acer Aspire TC-885-UA92 Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$90.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Polaroid ZIP Wireless Mobile Photo Mini Printer</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">CyberpowerPC Gamer Xtreme VR Gaming PC</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$70.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">External DVD CD Drive, Aluminum</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$70.99</span>
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">SkyTech Supremacy Gaming Computer</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iPhone 11 Protective Cover with Tempered Film</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$80.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="shop-3" className="tab-pane padding-55-row-col">
                  <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Adapt Active Noise Cancelling Headphones</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$59.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iPhone 11 Case, Heavy Duty [Military Grade] </a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$20.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Libratone Track Air+ True Wireless Active Noise</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$59.99</span>
                                      <span className="new-price">$35.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Acer Aspire C24-865-UA91 AIO Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$50.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iBUYPOWER Gaming PC Computer Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Andoer Gimbal 3-Axis Handheld Stabilizer</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$70.99</span>
                                      <span className="new-price">$66.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Acer Aspire TC-885-UA92 Desktop</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$90.99</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                      <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">Polaroid ZIP Wireless Mobile Photo Mini Printer</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">CyberpowerPC Gamer Xtreme VR Gaming PC</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$70.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">External DVD CD Drive, Aluminum</a></h4>
                                  <div className="product-price">
                                      <span className="old-price">$70.99</span>
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">SkyTech Supremacy Gaming Computer</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$60.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="product-wrap mb-55">
                              <div className="product-img pro-theme-color-border product-border mb-25">
                                  <a href="product-details.html">
                                       <img src={require("../../assets/images/product/p3.png")} alt=""/>
                                  </a>
                                  <div className="product-action product-action-position-1 pro-action-theme-color">
                                      <a title="Add to Cart" href="#"><i className="fa fa-cart-arrow-down"></i></a>
                                      <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                      <a title="Add to Wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                      <a title="Add to Compare" href="#"><i className="fa fa-compress"></i></a>
                                  </div>
                              </div>
                              <div className="product-content">
                                  <h4><a href="product-details.html">iPhone 11 Protective Cover with Tempered Film</a></h4>
                                  <div className="product-price">
                                      <span className="new-price">$80.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="pro-pagination-style mt-30 text-center">
                  <ul>
                      <li><a className="active" href="#">01</a></li>
                      <li><a href="#">02</a></li>
                      <li><a href="#">03</a></li>
                      <li><a href="#">04</a></li>
                      <li><a href="#">05</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <div className="subscribe-area bg-black pt-70 pb-80">
  <div className="container">
  <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="subscribe-title">
                            <h3>Stay in touch</h3>
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <div id="mc_embed_signup" className="subscribe-form subscribe-mrg-1">
                    <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style" novalidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="#">
                      <div id="mc_embed_signup_scroll" className="mc-form">
                      <input className="email" type="email" required="" placeholder="Enter your email address..." name="EMAIL" value=""/>
                      <div className="mc-news" aria-hidden="true">
                                        <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                    </div>
                                    <div className="clear">
                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Subscribe"/>
                                    </div>
                      </div>
                    </form>
                    </div>
                    </div>
         </div>
  </div>
  </div>
       </div>
    );
  }
}

export default Products;
