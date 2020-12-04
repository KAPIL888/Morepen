import React from 'react';
import { Component } from "react";
import Footer from "../../component/footer";
import Header from "../../component/header";

class MyAccount extends Component {
    render() {
        return (
            <div className="main-wrapper">   
        <Header />
        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="product-wrap mb-55">
                <div className="dumb-25">
                    <h2 className="orang">Account</h2>
                    <h3>Subramala thode sahukar</h3>
                </div>
            </div>

        </div>
    </div>
    <div className="wraper">
        <div className="row">
            <div className="col-md-3">
                <div className="left">
                    <h3 className="mt-20">OVERVIEW</h3>
                    <hr></hr>
                    <h3 className="mt-20 mb-20">MY ACCOUNT</h3>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                        <label className="custom-control-label" for="customCheck1">My Proﬁle</label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" for="customCheck2">Edit Proﬁle</label>
                    </div>

                    <hr></hr>
                    <h3 className="mt-20 mb-20">ORDERS</h3>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                        <label className="custom-control-label" for="customCheck1">All Orders</label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" for="customCheck2">View Recent Order Status</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" for="customCheck2">Cancelled Orders</label>
                    </div>
                    <hr></hr>
                    <h3 className="mt-20 mb-20">ORDER TRACKING</h3>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                        <label className="custom-control-label" for="customCheck1">Order Tracking ID</label>
                    </div>

                    <hr></hr>
                    <div className="dashboard">

                        <a href="#">SHOPPING CART</a>
                        <a href="#">DELETE ACCOUNT</a>
                        <a href="#">LOG OUT</a>
                    </div>

                </div>

            </div>

            <div className="col-md-9">
                <div className="rightbar pd-40">

                    <h3 className="orang">Proﬁle Details</h3>
                    <hr></hr>
                    <form>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Full Name</label>

                            </div>

                            <div className="col-md-7">Subramala thode sahukar</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Mobile Number</label>

                            </div>

                            <div className="col-md-7">01222-22-222</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Email ID</label>

                            </div>

                            <div className="col-md-7">Subramala220022@yahoo.com</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Gender</label>

                            </div>

                            <div className="col-md-7">Female</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Date of Birth</label>

                            </div>

                            <div className="col-md-7">02-02-2002</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Location</label>

                            </div>

                            <div className="col-md-7">Delhi NCR</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Alternate Mobile</label>

                            </div>

                            <div className="col-md-7">1111-22-1101</div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-md-5">

                                <label>Hint Name</label>

                            </div>

                            <div className="col-md-7">- not added -</div>
                        </div>
                        <button type="button" className="btn btn-primary csd mb-2">Edit Proﬁle</button>
                    </form>


                </div>


            </div>
        </div>
    </div>
</div>
        <Footer />
        </div>
        );
    }
}
export default MyAccount;