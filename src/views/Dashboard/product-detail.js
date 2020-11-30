import React, { Component } from 'react';
import api from '../../shared/api';


class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: this.props.location.data,
            productId: this.props.match.params.productId,
            productDetail:[]
        }
    }
    getProductById = async () => {
        const id = this.state.productId ? '/' + this.state.productId : '';
        let response = await api.products.getProductsById(id);
        this.setState({
            productDetail: response.data.data            
        })
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    componentDidMount(){
        console.log(this.props.match.params.productId)
        this.getProductById();
        this.scrollToTop();
    }
  render() {
    return (<div>
        <div className="shop-area section-padding-2 mt-50 pb-110 product-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="product-details-tab product-details-tab2">
                            <div className="pro-dec-big-img-slider">
                                <div className="easyzoom-style">
                                    <div className="easyzoom easyzoom--overlay">
                                        <a href="assets/images/product/product_details.png">
                                        {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-dec-slider-2 product-dec-small-style2">
                                <div className="product-dec-small active">
                                    {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                </div>
                                <div className="product-dec-small">
                                    {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                </div>
                                <div className="product-dec-small">
                                    {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                </div>
                                <div className="product-dec-small">
                                    {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                </div>
                                <div className="product-dec-small">
                                    {this.state.productDetail.media && this.state.productDetail.media.length > 0 ? <img src={this.state.productDetail.media[0].url} alt={this.state.productDetail.name}/>: null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="product-details-wrap pro-dec-res-mrg-top2">
                            <div className="product-details-content">
                                <h2 className="uppercase">{this.state.productDetail.name}</h2>
                                <h6>ayurvedic herbal immunity booster</h6>
                                <div className="product-details-peragraph">
                                    <div className="product-dec-list-wrap">
                                        <div className="product-dec-list">
                                        <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.description }}></span> 
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-dec-info-wrap pro-dec-info-wrap2">
                                    <div className="pro-dec-ratting-wrap">
                                        <a href="#">4.8 </a><div className="pro-dec-ratting">
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="yellow fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="product-details-action-wrap">
                                    <div className="product-details-cart">
                                        <a title="Add to cart" href="#"><img src={require("../../assets/images/logo/ruppes.png")} alt=""/> {this.state.productDetail.price} |  ADD TO BAG</a>
                                    </div>
                                 <p>Buy any 3, save 15% · Free shipping over rs. 700</p>  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
</div>
<header className="footer-area section-padding-1" style={{background: "#668D54"}}>
            <div className="container-fluid">
                <div className="footer-top pt-20 pb-20 ">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-12">
                            <div className="footer-menu">
                                <nav className="footer-menu_menu">
                                    <ul>
                                        <li><a href="#" className={(this.state.productDetail.description?'':'d-none')}>PRODUCT DESCRIPTION</a></li>
                                        <li><a className={(this.state.productDetail.benefits?'':'d-none')}>BENEFITS</a></li>
                                        <li><a href="#" className={(this.state.productDetail.ingredients?'':'d-none')}>INGREDIENTS</a></li>
                                        <li><a href="#" className={(this.state.productDetail.nutritional_information?'':'d-none')}>NUTRITIONAL INFORMATION</a></li>
                                        <li><a href="#" className={(this.state.productDetail.dosage?'':'d-none')}>DOSAGE</a></li>
                                        <li><a href="#" className={(this.state.productDetail.precautions?'':'d-none')}>PRECAUTIONS</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <div className={"slider-area mb-50 "+(this.state.productDetail.description?'':'d-none')}>
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex product-detail-2" >
                <div className="container text-center">
                    <h2 style={{color: "#E67F1A", marginBottom: "30px"}}>PRODUCT DESCRIPTION</h2>
                    <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.description }}></span>                   
                </div>
            </div>
        </div> 
        <div className={"slider-area mb-50 "+(this.state.productDetail.benefits?'':'d-none')}>
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex" 
                style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "auto", padding: "30px", paddingTop: "50px", backgroundPosition: "top center", marginBottom: "50px" }}>
              <div className="container text-center ">
                    <div className="row">
                        <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>BENEFITS</h2>
                        <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.benefits }}></span> 
                    </div>
            </div>
        </div>

  
</div>

        <div className={"store-area pt-5 pb-50 text-center "+(this.state.productDetail.ingredients?'':'d-none')}>
    <h2 className="uppercase" style={{color: "#E67F1A"}}>INGREDIENTS</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.ingredients }}></span> 
                    </div>
                   
                    
                    
                </div>
            </div>
        </div>

        <div className={"single-main-slider bg-img slider-height-3 align-items-center custom-d-flex "+(this.state.productDetail.dosage?'':'d-none')} style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "auto", padding: "30px", paddingTop: "50px", backgroundPosition: "top center", marginBottom: "50px" }}>
            <div className="container text ">
                <div className="row">
                    <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>DOSAGE</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.dosage }}></span> 
                    </div>
                </div>
            </div>
        </div>

        <header className={"footer-area section-padding-1 mb-50 "+(this.state.productDetail.precautions?'':'d-none')} style={{background: "#BFE090"}}>
            <div className="container-fluid">
                <div className="footer-top pt-20 pb-20 ">
                    <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>PRECAUTIONS</h2>
                    <div className="row align-items-center text-center">
                        
                        <div className="col-lg-12">
                        <span dangerouslySetInnerHTML={{ __html: this.state.productDetail.precautions }}></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <div className="blog-dec-midle-content d-none">
            <img src={require("../../assets/images/slider/review.png")} style={{width:"100%"}} alt="blog"/>
        </div>
        {/* <div className="container">
            <div className="section-title-5-wrap mb-60">
                <div className="section-title-5 cst ">
                    <h2>Recommended Products</h2>
                </div>
            </div>
        </div>  */}
        {/** Slider pending */}
        {/* <div className="container text-center"><a href="#" className="btn common_bt">VIEW MORE</a></div>
        <div className="container pt-40">
                <div className="section-title-5-wrap mb-60">
                    <div className="section-title-5 cst ">
                        <h2>Best Sellers of Dr. Morepen</h2>

                    </div>                   
                </div>
 </div> */}
 {/** Slider pending */}
 {/* <div className="container text-center"><a href="#" className="btn common_bt">VIEW MORE</a></div> */}
 
 <div className="bookstore-area section-padding-1 bg-img pt-195 pb-205" style={{padding: "70px 0px  0px 0px"}}>
 <div className="service-area  section-padding-1  pb-35">
 <div className="container-fluid">
     <div className="row">
         <div className="col-lg-4 col-md-4">
             <div className="single-service text-center service-mrg-left mb-30">
                 <div className="service-icon">
                  <i><img src={require("../../assets/images/brand-logo/11.png")}></img></i>
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
                   <i><img src={require("../../assets/images/brand-logo/12.png")}/></i>
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
                  <i><img src={require("../../assets/images/brand-logo/13.png")}/></i>
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
                   <img src={require("../../assets/images/slider/insta.png")}/>
                </div>
            </div>
        </div>
        </div>
        <div className="slider-area mb-50">
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex subscribe-footer-style">

              <div className="container text-center">
<h2> Get personalized guidance, deals, freebies and Consult Doctors</h2>
                <a href="#" className="btn common_bt mt-20">SUBSCRIBE TO UPDATE</a></div>
            </div>
        </div>
</div>
    );
  }
}

export default ProductDetail;
