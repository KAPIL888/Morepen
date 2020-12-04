import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {
  render() {
    return (

      <div class="form-login-body signbanner">
      <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12 mx-auto login-desk">
              <div class="row">
                  <div class="col-md-6 loginform">
                      <nav class="nabs text-left">
                          <ul>
                              <li><Link to={{pathname: "/login"}} >Login</Link></li>
                              <li class="active"><a href="#">Sign In</a></li>
  
                          </ul>
                      </nav>
                      <h4 class="text-left">Fill the registration form with the personal information:</h4>
                      <div class="login-det">
                          <div class="form-row">
                              <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Email ID / Mobile" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
  
                          <p class="text-left cst"><input type="checkbox"/>
                              I would like to receive Dr. Morpen news and Product updates</p>
                          <div class="form-row space-equal">
                              <button class="btn btn-sm btn-danger float-left">Sign up</button>
  
                          </div>
                          <p class="cstt">
                              <span>OR</span>
                          </p>
                          <p class="text-left cst">
                              Continue with</p>
                          <div class="form-row space-equal clam registrationf">
  
  
                              <button class="btn btn-sm btn-danger float-left dts">Facebook</button>
                              <button class="btn btn-sm btn-danger float-left dts">Google</button>
                          </div>
  
                          <p>By signing in you agree to our T&C</p>
  
                      </div>
  
                  </div>
  
                  <div class="col-md-6 detail-box">
                      <div class="detailsh">
                          <h4 class="mb-50">Welcome Back</h4>
                          <p class="mb-20">Over millions of satisﬁed customers.</p>
                          <p class="mb-20">Earn rewards on every orders.</p>
                          <p class="mb-20">Get personalized health advice.</p>
                      </div>
                  </div>
              </div>
  
          </div>
      </div>
  </div>
   </div>
    );
  }
}

export default Register;
