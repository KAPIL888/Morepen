import React, { Component } from 'react';
import api from '../../shared/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faSearchPlus, faHeart,facompress, faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
                      <a href="#shop-1" onClick={() => this.setState({ activeGrid: "shop-1"})} className={(this.state.activeGrid === 'shop-1' ? 'active' : '')}><i className=" ti-view-list-alt "></i></a>
                      <a href="#shop-2" onClick={() => this.setState({ activeGrid: "shop-2"})} className={(this.state.activeGrid === 'shop-2' ? 'active' : '')}><i className=" ti-layout-grid4"></i></a>
                      <a href="#shop-3" onClick={() => this.setState({ activeGrid: "shop-3"})} className={(this.state.activeGrid === 'shop-3' ? 'active' : '')}><i className="ti-layout-grid3"></i></a>
                  </div>
                  <div className="shop-short-by ml-40">
                      <span>Default sorting <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></span>
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
                      <a className="shop-filter-active" href="#">Filters <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
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
          <div className={"tab-pane " + (this.state.activeGrid === 'shop-1' ? 'active' : '')+ " padding-55-row-col"} >
          {this.state.productsList.map((value, key) => {
          return <div className="shop-list-wrap mb-50">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="product-wrap">
                                        <div className="product-img pro-theme-color-border product-border">
                                            {value.media.length > 0 ? <img src={value.media[0].thumb} alt={value.name}/>: null}
                                            <div className="shop-list-quickview">
                                                <a data-toggle="modal" data-target="#exampleModal" href="#"><i className="fa fa-search-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                                    <div className="shop-list-content">
                                        <h3><a href="#">{value.name}</a></h3>
                                        <div className="pro-list-price">
                                            <span>{value.price}</span>
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: value.description }}></p>
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
          })}
          </div>
          <div className={"tab-pane " + (this.state.activeGrid === 'shop-2' ? 'active' : '')+" padding-55-row-col"} >
                 <div class="row">
                    {this.state.productsList.map((value, key) => {
                        return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-wrap mb-55">
                                <div className="product-img pro-theme-color-border product-border mb-25">
                                {value.media.length > 0 ? <img src={value.media[0].thumb} alt={value.name}/>: null}
                                    <span className="d-none badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                    <div className="product-action product-action-position-1 pro-action-theme-color">
                                        <a title="Add to Cart" href="#"><FontAwesomeIcon icon={faCartArrowDown} /></a>
                                        <a data-toggle="modal" data-target="#exampleModal" href="#"><FontAwesomeIcon icon={faSearchPlus} /></a>
                                        <a title="Add to Wishlist" href="#"><FontAwesomeIcon icon={faHeart} /></a>
                                        <a title="Add to Compare" href="#"><FontAwesomeIcon icon={facompress} /></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">{value.name}</a></h4>
                                    <div className="product-price">
                                        {value.discount_price!=null && value.discount_price>0 ? <span className="old-price">{value.price}</span>: <span className="new-price">{value.price}</span>}
                                        {value.discount_price!=null && value.discount_price>0 ? <span className="new-price">{value.discount_price}</span>:''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                 </div>
              </div>
              <div className={"tab-pane " + (this.state.activeGrid === 'shop-3' ? 'active' : '')+" padding-55-row-col"} >
                 <div class="row">
                    {this.state.productsList.map((value, key) => {
                        return <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-wrap mb-55">
                                <div className="product-img pro-theme-color-border product-border mb-25">
                                {value.media.length > 0 ? <img src={value.media[0].thumb} alt={value.name}/>: null}
                                    <span className="d-none badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                    <div className="product-action product-action-position-1 pro-action-theme-color">
                                        <a title="Add to Cart" href="#"><FontAwesomeIcon icon={faCartArrowDown} /></a>
                                        <a data-toggle="modal" data-target="#exampleModal" href="#"><FontAwesomeIcon icon={faSearchPlus} /></a>
                                        <a title="Add to Wishlist" href="#"><FontAwesomeIcon icon={faHeart} /></a>
                                        <a title="Add to Compare" href="#"><FontAwesomeIcon icon={facompress} /></a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">{value.name}</a></h4>
                                    <div className="product-price">
                                        {value.discount_price!=null && value.discount_price>0 ? <span className="old-price">{value.price}</span>: <span className="new-price">{value.price}</span>}
                                        {value.discount_price!=null && value.discount_price>0 ? <span className="new-price">{value.discount_price}</span>:''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
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
                    <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style" target="_blank" name="mc-embedded-subscribe-form" method="post" action="#">
                      <div id="mc_embed_signup_scroll" className="mc-form">
                      <input className="email" type="email" required="" placeholder="Enter your email address..." name="EMAIL"/>
                      <div className="mc-news" aria-hidden="true">
                                        <input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                    </div>
                                    <div className="clear">
                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe"/>
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
