import React, { Component } from 'react';
import api from '../../shared/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            categroyDetails: this.props.location.data,
            productsList: [],
            activeGrid:'shop-2',
            categoryList: [],
            categoryId: this.props.match.params.id,    
        }
    }
   loadShopByCategory=async () =>{
    let response=await api.products.shopByCategory()
    this.setState({
        categoryList:this.setCategory(response.data.data)
    })
  }
  setCategory(input){
    let category = [];
    input.map((value, key) => {
        if (value.parent_id == 0) {
         let childCategory = [];
         input.map((item, index) => {
            if (item.parent_id == value.id) {
             childCategory.push(item);
            }
            });
            value.child = childCategory;
            category.push(value);
        }
    });
    return  category;
  }
    getProductsList = async () => {
        const search = this.state.categoryId ? 'category_id:' + this.state.categoryId : '';
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
        this.loadShopByCategory();
        this.getProductsList();
        this.scrollToTop();
    }
  render() {
    return (
    <div>
            <div className="slider-area mb-50">
                <div className="single-main-slider cstbg-img bg-img slider-height-3 align-items-center custom-d-flex product-top-banner">
                </div>
            </div>
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
                                    {this.state.categoryList.map((value,key)=>{
                                     return <li className={"sw-sub-wrap "+(this.state.categoryId === value.id?'active':'')}><a href="javascript:void(0);" onClick={() => {this.setState({ categroyDetails: value,categoryId: value.id });this.getProductsList();}}>{value.name}<span className="menu-expand"><FontAwesomeIcon icon={faAngleDown}/></span></a>
                                            <ul className={"sw-sub-menu "+(this.state.categoryId === value.id?'':'d-none')}>
                                            {value.child.map((item,index)=>{
                                               return <li><a href="javascript:void(0);" onClick={() => {this.setState({ categroyDetails: value,categoryId: value.id});this.getProductsList();}}>{item.name}</a></li>
                                            })}
                                            </ul>
                                        </li>
                                    })}
                                    </ul>
                                </div>
                            </div>
                             <div className="sidebar-widget ">
                                <div className="panel-group" id="accordion">
                                
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
                    <a href="#shop-1" onClick={() => this.setState({ activeGrid: "shop-1"})} className={"d-none"+(this.state.activeGrid === 'shop-1' ? 'active' : '')}><i className=" ti-view-list-alt "></i></a>
                    <a href="#shop-2" onClick={() => this.setState({ activeGrid: "shop-2"})} className={(this.state.activeGrid === 'shop-2' ? 'active' : '')}><i className=" ti-layout-grid4"></i></a>
                    <a href="#shop-3" onClick={() => this.setState({ activeGrid: "shop-3"})} className={(this.state.activeGrid === 'shop-3' ? 'active' : '')}><i className="ti-layout-grid2"></i></a>
                </div>
                    <span class>Showing {this.state.productsList.length} of {this.state.productsList.length} results</span><span>Sort by:</span><div className="shop-short-by ml-40">
                        <span>Default sorting <FontAwesomeIcon icon={faAngleDown}/></span>
                        <ul>
                            <li className="active"><a href="javascript:void(0);">Default sorting</a></li>
                            <li><a href="javascript:void(0);">Sort by popularity</a></li>
                            <li><a href="javascript:void(0);">Sort by average rating</a></li>
                            <li><a href="javascript:void(0);">Sort by latest</a></li>
                            <li><a href="javascript:void(0);">Sort by price: low to high</a></li>
                            <li><a href="javascript:void(0);">Sort by price: high to low</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            {this.state.productsList.map((value, key) => {
            return <div className={this.state.activeGrid === 'shop-1' ? 'col-xs-12 col-sm-12 col-md-12' : this.state.activeGrid === 'shop-2' ? 'col-xs-4 col-sm-4 col-md-4' : 'col-xs-5 col-sm-5 col-md-5'}>
                <div className="product c1">
                    <div className="action_list">
                        <a href="javascript:void(0);"><img src={require("../../assets/images/logo/carticon.png")} alt=''/></a>
                        <a href="javascript:void(0);"><img src={require("../../assets/images/logo/wish.png")} alt=''/></a>
                    </div>
                    <Link to={`/product-detail/${value.id}`}>
                    {value.media.length > 0 ? <img src={value.media[0].url} alt={value.name}/>: null}
                    <span dangerouslySetInnerHTML={{ __html: value.short_description }}></span>
                    </Link>
                    <div className="product-content">
                        <h4>
                            <Link to={{
                                         pathname: "/product-detail/"+value.id,
                                         data: value,
                                         categories:this.state.categoryList, 
                                     }} >{value.name}</Link>
                        </h4>
                        <div className="product-price">
                            {value.discount_price ? <div><span className="old-price"><del>{value.price}</del></span><span className="new-price">{value.discount_price}</span></div> : <span className="old-price">{value.price}</span>}
                        </div>
                    </div>
                </div>
            </div>
        })}
        
        
        <div className="d-none pro-pagination-style mt-30 text-center">
            <ul>
                <li><a className="active" href="javascript:void(0);">01</a></li>
                <li><a href="javascript:void(0);">02</a></li>
                <li><a href="javascript:void(0);">Next</a></li>
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
            <a href="javascript:void(0);" className="btn common_bt mt-20">SUBSCRIBE TO UPDATE</a>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Products;
