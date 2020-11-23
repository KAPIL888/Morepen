import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../shared/api';
import OwlCarousel from 'react-owl-carousel';
import HomeSlider from "../../component/sliders/HomeSlider";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

class Home extends Component {

    constructor(props)
    {  
        super(props)
        this.state={
            categoryList:[],
            featuredProductList:[]
        }
    }
    
    loadShopByCategory=async () =>{
        let response=await api.home.shopByCategory()
        this.setState({
            categoryList:response.data.data
        })
  }
    featuredProduct=async () => {
        let response=await api.home.featuredProduct()
        this.setState({
            featuredProductList: response.data.data
        });
    }
    componentDidMount(){
        this.loadShopByCategory();  
        this.featuredProduct();  
    }


 settings={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  render() {
    return (
      <div className="main-wrapper">
        <div className="slider-area section-padding-1">
        <div className="container-fluida">
            <OwlCarousel items={1} className="main-slider-active-1 owl-carousel slider-nav-position-1 slider-nav-style-1" loop margin={10} nav >
              <div className="single-main-slider slider-animated-1 bg-img slider-height-1 align-items-center custom-d-flex"><img src={require("../../assets/images/slider/book-hero-image.png")} alt=""/></div>
              </OwlCarousel>
        </div>
        </div>
        <div className="bookstore-area section-padding-1 bg-img pt-195 pb-205" style={{padding: "70px 0px"}}>
            <div className="container-fluid">
                <div className="section-title-4 text-center mb-55">
                    <h2>Good Health powered with Best quality Products</h2>
                    
                </div>
               
            </div>
            <div className="service-area  section-padding-1  pb-35">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-service text-center service-mrg-left mb-30">
                            <div className="service-icon">
                             <i><img src={require("../../assets/images/brand-logo/1.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>Nature</h4>
                                <p>We bring to you natural healthcare essentials with no side eﬀects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-service text-center mb-30">
                            <div className="service-icon">
                              <i><img src={require("../../assets/images/brand-logo/2.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>Science</h4>
                                <p>We bring to you a combination of nature & science</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-service text-center mb-30">
                            <div className="service-icon">
                             <i><img src={require("../../assets/images/brand-logo/3.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>Best Quality</h4>
                                <p>We bring to you products That are lab-tested,  several times</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-service text-center service-mrg-right mb-30">
                            <div className="service-icon">
                                <i><img src={require("../../assets/images/brand-logo/4.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
<h4>Trusted Brand</h4> <p>Oﬀering healthcare  products for more than 3 decades now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="product-area  pt-40 pb-40">
            <div className="container">
                <div className="section-title-5-wrap mb-60">
                    <div className="section-title-5">
                        <h2>Shop by Categories</h2>
                    </div>                   
                </div>


 </div>
         <div className="container-fluid">

                <div className="row">

                    {this.state.categoryList.map((value,key)=>{
                         return <div key={key} className="col-lg-4 col-xl-4 col-md-6 col-sm-6">
                         <div className="product-wrap mb-55">
                            <div className="product-img pro-theme-color-border mb-25">
                                {value.media.length > 0 ? <img src={value.media[0].thumb} alt={value.name}/>: null}
                                     <Link to={{
                                         pathname: "/products",
                                         data: value
                                     }} >
                                {value.name}
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    })}
                    
                    
             
                   
                </div>
            </div>  
        </div>
        <div className="slider-area section-padding-1">
        <div className="container-fluida">
            <OwlCarousel items={1} className="main-slider-active-1 owl-carousel slider-nav-position-1 slider-nav-style-1" loop margin={10} nav >
              <div className="single-main-slider slider-animated-1 bg-img slider-height-1 align-items-center custom-d-flex"><img src={require("../../assets/images/slider/midbanner.jpg")} alt=""/></div>
              </OwlCarousel>
        </div>
        </div>
        <div className="container">
          <div className="section-title-5-wrap mb-60">
            <div className="section-title-5 cst ">
              <h2>Featured Products</h2>
              <h3>Best Products On Sale </h3>
              <nav className="nabs text-center">
                <ul>
                  <li><a className="active" href="#">Deals Of the Day</a></li>
                  <li><a href="#">New Launches</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
        {
            this.state.featuredProductList.length !==0 ? <HomeSlider dataParentToChild={this.state.featuredProductList}/> : null
        }
        
        </div>
        
        <div className="container text-center"><a href="#" className="btn common_bt">VIEW MORE</a></div>
        <div className="container pt-40">
            <div className="section-title-5-wrap mb-60">
                <div className="section-title-5 cst ">
                    <h2>Best Sellers of Dr. Morepen</h2>
                </div>
            </div>
        </div>
        <div>
            {this.state.featuredProductList.length > 0 && 
        <HomeSlider dataParentToChild={this.state.featuredProductList}/>
            }
        </div>
        
      <div className="bookstore-area section-padding-1 bg-img pt-195 pb-205" style={{padding: "70px 0px  0px 0px"}}>
            <div className="service-area  section-padding-1  pb-35">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="single-service text-center service-mrg-left mb-30">
                            <div className="service-icon">
                             <i><img src={require("../../assets/images/brand-logo/11.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>FREE SHIPPING</h4>
                                <p>Free shipping on all <br></br>prepaid orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single-service text-center mb-30">
                            <div className="service-icon">
                              <i><img src={require("../../assets/images/brand-logo/12.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>SECURED ONLINE PAYMENTS</h4>
                                <p>Debit/Credit card, UPI,<br></br>payTM all available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single-service text-center mb-30">
                            <div className="service-icon">
                             <i><img src={require("../../assets/images/brand-logo/13.png")} alt=""/></i>
                            </div>
                            <div className="service-content">
                                <h4>CASH ON DELIVERY</h4>
                                <p>Free shipping on COD<br></br>orders above 500</p>
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
                   <img className="overflow-hidden" src={require("../../assets/images/slider/insta.png")} alt=""/>
                </div>
            </div>
        </div>
        </div>

        <div className="blog-area section-padding-1 pt-115 pb-0">
            <div className="container-fluid">
                <div className="section-title-2 text-center mb-60">
                    <h2>From our Blog</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/blog1.png")} alt="blog"/></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                                <div className="btn-style-41 btn-style-4-ptb11 btn-hover">
                                    <a className="bg-black-hover1" href="#">Read More {'>>'}</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/blog1.png")} alt="blog"/></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                                <div className="btn-style-41 btn-style-4-ptb11 btn-hover">
    <a className="bg-black-hover1" href="#">Read More {'>>'}</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/blog1.png")} alt="blog" /></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                                <div className="btn-style-41 btn-style-4-ptb11 btn-hover">
    <a className="bg-black-hover1" href="#">Read More {'>>'}</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/blog1.png")} alt="blog"/></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                                <div className="btn-style-41 btn-style-4-ptb11 btn-hover">
    <a className="bg-black-hover1" href="#">Read More {'>>'}</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="container text-center"><a href="#" className="btn common_bt">LOAD MORE</a></div>
        <div className="blog-area section-padding-1 pt-115 pb-50">
            <div className="container-fluid">
                <div className="section-title-2 text-center mb-60">
                    <h2>What do our Customers Say</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           <div className="wraps main-wrappers">
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/tes.png")} alt="blog"/></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                              
                            </div>
                            </div>
                        </div></div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="blog-wrap-2 mb-30">
                           <div className="wraps main-wrappers">
                            <div className="blog-img-2">
                                <a href="#"><img src={require("../../assets/images/slider/tes.png")} alt="blog"/></a>
                            </div>

                            <div className="blog-content-2 bc-padding-left">
                                <div className="wraps">
                                <div className="section-title-2 text-left mb-20">
                    <h2>Lorem ipsum</h2>
                </div>
                                <p>Proin vitae nisl mauris. Nulla dignissim maximus molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.nascetur ridiculus mus.</p>
                              
                            </div>
                            </div>
                        </div></div>
                    </div>
                  
                </div>
            </div>
        </div>       

        <div className="slider-area mb-50">
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex subscribe-footer-style" >
              <div className="container text-center">
<h2> Get personalized guidance, deals, freebies and Consult Doctors</h2>
                <a href="#" className="btn common_bt mt-20">SUBSCRIBE TO UPDATE</a></div>
            </div>
        </div>
        </div>
       
    );
  }
}

export default Home;
