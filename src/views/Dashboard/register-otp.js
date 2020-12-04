import React from 'react';
import { Component } from "react";
import Footer from '../../component/footer';
import Header from '../../component/header';

class RegisterOtp extends Component {
    render() {
        return (
            <div className="main-wrapper"> 
        <Header />
<div class="form-login-body signbanner">
     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 mx-auto login-desk">
                <div className="row">
                    <div className="col-md-6 loginform otp">
                        <nav className="nabs text-left">
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li className="active"><a href="#">Sign In</a></li>
    
                            </ul>
                        </nav>
                        <h4 className="text-left">Fill the registration form with the personal information:</h4>
                        <div className="login-det">
                            <div className="form-row">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter OTP" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
    
                            <p className="text-left cst"><input type="checkbox"/>
                                Show Password</p>
                            <div className="form-row space-equal">
                                <button className="btn btn-sm btn-danger float-left">Sign up</button>
    
                            </div>
    
                            <p className="mt-30">By signing in you agree to our T&C</p>
    
                        </div>
    
                    </div>
    
                    <div className="col-md-6 detail-box">
                        <div className="detailsh">
                            <h4 className="mb-50">Welcome Back</h4>
                            <p className="mb-20">Over millions of satisﬁed customers.</p>
                            <p className="mb-20">Earn rewards on every orders.</p>
                            <p className="mb-20">Get personalized health advice.</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        </div>
    </div>
    <Footer />
  </div>);
    }
}
export default RegisterOtp;