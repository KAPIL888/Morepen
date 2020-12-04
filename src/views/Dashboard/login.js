import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  render() {
    return (
      <div class="form-login-body">
      <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12 mx-auto login-desk">
              <div class="row">
                  <div class="col-md-6 detail-box">
                      <div class="detailsh">
                          <button class="btn btn-sm btn-danger">JOIN THE COMMUNITY</button>
                      </div>
                  </div>
                  <div class="col-md-6 loginform">
                      <h4>Welcome Back</h4>
                      <div class="login-det">
                          <div class="form-row">
                              <label for="">Email Address</label>
                              <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Email ID / Mobile" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                          <div class="form-row">
                              <label for="">Password</label>
                              <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
  
  
                          <div class="form-row space-equal">
                              <button class="btn btn-sm btn-danger float-left">Login</button>
                              <p class="forget float-right"><a href="">Forget Password?</a></p>
                          </div>
  
  
                      </div>
                      <div class="form-row space-equal clam">
  
                          <p class="forget float-right"><Link to={{pathname: "/register"}} >New User? </Link>
                              <br></br>
                              <a href="">Sign Up link available</a>
                          </p>
  
                          <button class="btn btn-sm btn-danger float-left dts">GET STARTED</button>
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

export default Login;
