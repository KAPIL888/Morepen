import React, { Component } from 'react';
import api from '../../shared/api';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer';
import Header from '../../component/header';
class ProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: this.props.location.data,
            productId: this.props.match.params.productId,
            productDetail:[],
            tabActivate:0,
            productimages: [],
            featuredProductList:[],
            quantity:0
        }
    }
    getProductById = async () => {
        const id = this.state.productId ? '/' + this.state.productId : '';
        let response = await api.products.getProductsById(id);
        this.setState({
            productDetail: response.data.data            
        });

        const images = [];
        for (const [index, value] of response.data.data.media.entries()) {
            var image = {
                original: value.url,
                thumbnail: value.thumb,
            };
            images.push(image);
        }

        this.setState({
            productimages: images,
          });
    }
    featuredProduct=async () => {
        let response=await api.home.featuredProduct()
        this.setState({
            featuredProductList: response.data.data
        });
  }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    componentDidMount(){        
        this.getProductById();
        this.scrollToTop();
        this.featuredProduct();
    }
    manageQuantity(action) {
        if (action === 0 && this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
        if (action === 1) {
            this.setState({
                quantity: this.state.quantity + 1
            });
        }
        
    }
    addToBag() {
        localStorage.setItem('cart', {'test':1});
        console.log('hello');
     }
  render() {
    return (
        <div className="main-wrapper">   
    <Header />
        <div className="container-fluid main-content">
            <div className="row">
                <div className="col-md-12 top-bar">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/home">Home {'>'}</Link></li>
                            <li className="breadcrumb-item"><Link to="/products">products {'>'}</Link></li>
    <li className="breadcrumb-item active" aria-current="page">{this.state.productDetail.name}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        
        <div className="row">
            <div className="col-md-5">
            <ImageGallery
                      items={this.state.productimages}
                      showNav={false}
                      thumbnailPosition='left'
                      showPlayButton={false}
                    />
            </div>

            <div className="col-md-7">
                <div className="product-details">
                
                    <h1>{this.state.productDetail.name}</h1>
                    <h4>{this.state.productDetail.tagline}</h4>
                    <div className="ratings">
                        {
                            [...Array(5)].map((elementInArray, index) => (
                                <i className={"fa fa-star" + (this.state.productDetail.product_rating >= 5 ? 'fa fa-star-o' : '')} aria-hidden="true"></i>
                            )
                            )
                        }
                        {this.state.productDetail.product_rating}/5
                    </div>
                    <ul className="clearfix">
                        <li><b>MRP Rs. {this.state.productDetail.price}</b></li>
                        <li className="d-none"><b><span>20% Off</span></b></li>
                    </ul>
                    <div className="discription clearfix" dangerouslySetInnerHTML={{ __html: this.state.productDetail.description }}>
                    </div>
                    <div className="price clearfix">QUANTITY  
                    <div className="value-button" id="decrease" onClick={() => {this.manageQuantity(0);}} value="Decrease Value">-</div>
                        <input type="number" id="number" value={this.state.quantity} />
                        <div className="value-button" id="increase" onClick={() => {this.manageQuantity(1);}} value="Increase Value">+</div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="size clearfix">

                        <ul>
                            <li className="active"><input type="button" className="addtocart" value="BUY NOW" /> </li>

                            <li className="delivery" style={{padding: "0px !important"}}><p><i className="fa fa-map-marker" aria-hidden="true"></i> Delivery Option</p>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Pincode" aria-label="Enter Pincode" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Enter</span>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="size clearfix customd">
                        <i className="fa fa-check-circle-o check" aria-hidden="true"></i>
                        <ul>
                            <li style={{background: "#e3e3e3", border: "1px solid #e3e3e3", color: "#000"}}>100% Genuine Product</li>
                            <li onClick={() => {this.addToBag();}}>ADD TO BAG</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <header className="footer-area section-padding-1">
            <div className="container-fluid">
                <div className="footer-top pt-20 pb-20 ">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-12">
                            <div className="footer-menu">
                                <nav className="footer-menu_menu_tab">
                                    <ul>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 0 })}}>PRODUCT DESCRIPTION</a></li>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 1 })}}>BENEFITS</a></li>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 2 })}}>INGREDIENTS</a></li>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 3 })}}>NUTRITIONAL INFORMATION</a></li>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 4 })}}>DOSAGE</a></li>
                                        <li><a href="javascript:void(0);" onClick={() => {this.setState({ tabActivate: 5 })}}>PRECAUTIONS</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
        <div className={"slider-area mb-50 "+(this.state.tabActivate===0?'':'d-none')}>
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex p-description">

              <div className="container text-center">
                <h2 style={{color: "#E67F1A", marginBottom: "30px"}}>PRODUCT DESCRIPTION</h2>
    <div dangerouslySetInnerHTML={{ __html: this.state.productDetail.description }}></div>
</div>
        </div>

   </div> 
   <div className={"slider-area mb-50 "+(this.state.tabActivate===1?'':'d-none')}>
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex" style={{backgroundSize:"100%", backgroundRepeat: "no-repeat", height: "auto",padding: "30px", paddingTop:"50px",backgroundPosition: "top center",marginBottom: "50px"}}>
              <div className="container text ">
                <div className="row">
                    <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>BENEFITS</h2>
</div>
                <div dangerouslySetInnerHTML={{ __html: this.state.productDetail.benefits }}>
</div>
            </div>
        </div>

  
</div>
<div className={"store-area pt-5 pb-50 text-center "+(this.state.tabActivate===2?'':'d-none')}>
    <h2 className="uppercase" style={{color: "#E67F1A"}}>INGREDIENTS</h2>
    <h4 className="uppercase mb-30" >HIGHEST QUALITY HERBS</h4>
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: this.state.productDetail.ingredients }}>
                </div>
            </div>
        </div>
        <div className={"slider-area mb-50 "+(this.state.tabActivate===3?'':'d-none')}>
            <div className="single-main-slider bg-img slider-height-3 align-items-center custom-d-flex p-description">

              <div className="container text-center">
                <h2 style={{color: "#E67F1A", marginBottom: "30px"}}>NUTRITIONAL INFORMATION</h2>
    <div dangerouslySetInnerHTML={{ __html: this.state.productDetail.nutritional_information }}></div>
            </div>
        </div>

   </div> 
        <div className={"single-main-slider bg-img slider-height-3 align-items-center custom-d-flex "+(this.state.tabActivate===4?'':'d-none')} style={{backgroundSize:"100%", backgroundRepeat: "no-repeat", height: "auto",padding: "30px", paddingTop:"50px",backgroundPosition: "top center",marginBottom: "50px"}}>
              <div className="container text ">
                <div className="row">
                    <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>DOSAGE</h2>
</div>
                <div dangerouslySetInnerHTML={{ __html: this.state.productDetail.dosage }}>
                </div>
            </div>
        </div>

        <header className={"footer-area section-padding-1 mb-50 "+(this.state.tabActivate===5?'':'d-none')} style={{background: "#BFE090"}}>
            <div className="container-fluid">
                <div className="footer-top pt-20 pb-20 p-0">
                    <h2 style={{width: "100%",color: "#E67F1A", marginBottom: "30px", textAlign:"center"}}>PRECAUTIONS</h2>
                    <div className="row align-items-center text-center">
                        
                        <div className="col-lg-12">
    <p style={{color: "#000", fontSize: "18px"}} dangerouslySetInnerHTML={{ __html: this.state.productDetail.precautions }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="blog-dec-midle-content">
    <div className="container ">
        <div className="row">
            <div className="col-md-4">
            </div>

            <div className="col-md-4">
                <center>
                    <h1>User Reviews</h1>
                </center>
            </div>

            <div className="col-md-4">
            </div>

        </div>
        <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4 rating" id="center">
                <span className="start_value">4.8</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </div>

            <div className="col-md-4"></div>

        </div>


        <section>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4 sec_row">
                    <p id="sec_para"> 156 Reviews <span className="review_span"> Write a review </span> </p>
                </div>

                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4" id="center">
                    <form>
                        <div className="shorby"> <span> Sort By: </span>
                            <select className="selectbox">
                                <option value="0"> Newest </option>
                                <option value="0"> 1 </option>
                                <option value="0"> 2 </option>
                            </select>
                        </div>
                    </form>
                </div>


                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-6">
                    <div id="sec_para" className="cflix"> <img src={require("../../assets/images/logo/user.png")}></img> <span className="review_span"> <b>Unknown Buyer</b> <span className="revverifiediew_span">verified</span> </span> </div>
                </div>
                <div className="col-md-4"> </div>
                <div className="col-md-2"> <span className="span_date"> 18/8/2020 </span> </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <div className="mainrate">5<span className="fa fa-star"></span></div>
                    <h3>AWESOME PRODUCT</h3>
                    <p className="sec_para_fas">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididun</p>
                </div>
            </div>
            <div className="col-border mb-50">
                <div className="row">
                    <div className="col-md-2">
                        <p className="thumb"> <span><i className="fa fa-thumbs-up" aria-hidden="true"></i> </span> HELPFUL</p>
                    </div>
                    <div className="col-md-10">
                        <p className="sec_para_fas"> 100 people found this helpful</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4 sec_row">
                    <p id="sec_para"> 156 Reviews <span className="review_span"> Write a review </span> </p>
                </div>

                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4" id="center">
                    <form>
                        <div className="shorby"> <span> Sort By: </span>
                            <select className="selectbox">
                                <option value="0"> Newest </option>
                                <option value="0"> 1 </option>
                                <option value="0"> 2 </option>
                            </select>
                        </div>
                    </form>
                </div>


                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-6">
                    <div id="sec_para" className="cflix"> <img src={require("../../assets/images/logo/user.png")}></img> <span className="review_span"> <b>Unknown Buyer</b> <span className="revverifiediew_span">verified</span> </span> </div>
                </div>
                <div className="col-md-4"> </div>
                <div className="col-md-2"> <span  className="span_date"> 18/8/2020 </span> </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <div className="mainrate">5<span className="fa fa-star"></span></div>
                    <h3>AWESOME PRODUCT</h3>
                    <p className="sec_para_fas">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididun</p>
                </div>
            </div>
            <div className="col-border mb-50">
                <div className="row">
                    <div className="col-md-2">
                        <p className="thumb"> <span><i className="fa fa-thumbs-up" aria-hidden="true"></i> </span> HELPFUL</p>
                    </div>
                    <div className="col-md-10">
                        <p className="sec_para_fas"> 100 people found this helpful</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4 sec_row">
                    <p id="sec_para"> 156 Reviews <span className="review_span"> Write a review </span> </p>
                </div>

                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-4"></div>


                <div className="col-md-4" id="center">
                    <form>
                        <div className="shorby"> <span> Sort By: </span>
                            <select className="selectbox">
                                <option value="0"> Newest </option>
                                <option value="0"> 1 </option>
                                <option value="0"> 2 </option>
                            </select>
                        </div>
                    </form>
                </div>


                <div className="col-md-4 "></div>


            </div>
            <div className="row">
                <div className="col-md-6">
                    <div id="sec_para" className="cflix"> <img src={require("../../assets/images/logo/user.png")}></img> <span className="review_span"> <b>Unknown Buyer</b> <span className="revverifiediew_span">verified</span> </span> </div>
                </div>
                <div className="col-md-4"> </div>
                <div className="col-md-2"> <span  className="span_date"> 18/8/2020 </span> </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <div className="mainrate">5<span className="fa fa-star"></span></div>
                    <h3>AWESOME PRODUCT</h3>
                    <p className="sec_para_fas">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididun</p>
                </div>
            </div>
            <div className="col-border mb-50">
                <div className="row">
                    <div className="col-md-2">
                        <p className="thumb"> <span><i className="fa fa-thumbs-up" aria-hidden="true"></i> </span> HELPFUL</p>
                    </div>
                    <div className="col-md-10">
                        <p className="sec_para_fas"> 100 people found this helpful</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <h2 className="text-center mb-50"><a href="javascript:void(0);" className="review_span">READ MORE REVIEWS {'>>'}</a></h2>
    
</div>
<div className="container">
                <div className="section-title-5-wrap mb-60">
                    <div className="section-title-5 cst ">
                        <h2>Recommended Products</h2>
                    </div>                   
                </div>


 </div> 
 <div className="container">
 {this.state.featuredProductList.length && (
          <OwlCarousel className="owl-theme cateslider" loop margin={10} nav>
            {this.state.featuredProductList.map((value, index) => {
              return (
                <Link to={{pathname: "/product-detail/"+value.id,data: value}} >
                  <div className="item"> <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="product c2 cateslider">
                      {value.media.length > 0 ? <img style={{height:"300px"}} src={value.media[0].url} alt={value.name}/>: null}
                          <span>{value.name}</span>
                          <div className="rating">
                              <img src="http://agenziaviaggiinnepal.com/DrMorepen/assets/images/slider/rating.png"></img>
                          </div>
                      </div>
                  </div>
                  </div>
                  </Link>
              );
            })}
          </OwlCarousel>
        )}
        </div>
 <div className="container text-center"><a href="javascript:void(0);" className="btn common_bt">VIEW MORE</a></div>
        <div className="container pt-40">
            <div className="section-title-5-wrap mb-60">
                <div className="section-title-5 cst ">
                    <h2>Best Sellers of Dr. Morepen</h2>
                </div>
            </div>
        </div>
        <div className="container">
        {this.state.featuredProductList.length && (
          <OwlCarousel className="owl-theme cateslider" loop margin={10} nav>
            {this.state.featuredProductList.map((value, index) => {
              return (
                <Link to={{pathname: "/product-detail/"+value.id,data: value}} >
                  <div className="item"> <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="product c2 cateslider">
                      {value.media.length > 0 ? <img style={{height:"300px"}} src={value.media[0].url} alt={value.name}/>: null}
                          <span>{value.name}</span>
                          <div className="rating">
                              <img src="http://agenziaviaggiinnepal.com/DrMorepen/assets/images/slider/rating.png"></img>
                          </div>
                      </div>
                  </div>
                  </div>
                  </Link>
              );
            })}
          </OwlCarousel>
        )}
        </div>
        <div className="container text-center"><a href="javascript:void(0);" className="btn common_bt">VIEW MORE</a></div>
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
                              <i><img src={require("../../assets/images/brand-logo/12.png")}></img></i>
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
                             <i><img src={require("../../assets/images/brand-logo/13.png")}></img></i>
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
                <a href="javascript:void(0);" className="btn common_bt mt-20">SUBSCRIBE TO UPDATE</a></div>
            </div>
            </div>
            <Footer />
            </div>
    );
  }
}

export default ProductDetail;
