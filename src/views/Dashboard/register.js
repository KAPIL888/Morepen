import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer';
import Header from '../../component/header';
import api from '../../shared/api';


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:null,
            email:null,
            password:null,
            errorMsg:null
        }
    }
 
 
    setValues = (e) =>{
        this.setState({
         [e.target.name]:e.target.value
        })
    }

    makeRegister = async () => {
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.setState({
            errorMsg: ""
        });
        let response = await api.auth.register(data);
        if (response.success) {
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            localStorage.setItem("apiToken", response.data.api_token);
            this.props.history.push("/myaccount");
        } else {
            this.setState({
                errorMsg: "Invalid credentials"
            });
        }
    }

  render() {
    return (
        <div className="main-wrapper"> 
        <Header />
      <div className="form-login-body signbanner">
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-12 mx-auto login-desk">
              <div className="row">
                  <div className="col-md-6 loginform">
                      <nav className="nabs text-left">
                          <ul>
                              <li><Link to={{pathname: "/login"}} >Login</Link></li>
                              <li className="active"><a href="#">Sign In</a></li>
  
                          </ul>
                      </nav>
                      <h4 className="text-left">Fill the registration form with the personal information:</h4>
                      <div className="login-det">
                      <div className="form-row">
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" onChange={this.setValues} placeholder="Name" aria-label="Name" name="name" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                          <div className="form-row">
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" onChange={this.setValues} placeholder="Email ID / Mobile" aria-label="Username" name="email" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                          <div className="form-row">
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" onChange={this.setValues} placeholder="Enter Password" aria-label="Username" name="password" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
  
                          <p className="text-left cst"><input type="checkbox"/>
                              I would like to receive Dr. Morpen news and Product updates</p>
                          <div className="form-row space-equal">
                              <button className="btn btn-sm btn-danger float-left" onClick={this.makeRegister}>Sign up</button>
  
                          </div>
                          <p className="cstt">
                              <span>OR</span>
                          </p>
                          <p className="text-left cst">
                              Continue with</p>
                          <div className="form-row space-equal clam registrationf">
  
  
                              <button className="btn btn-sm btn-danger float-left dts">Facebook</button>
                              <button className="btn btn-sm btn-danger float-left dts">Google</button>
                          </div>
  
                          <p>By signing in you agree to our T&C</p>
  
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
  </div>
    );
  }
}

export default Register;
