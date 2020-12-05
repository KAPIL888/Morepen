import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../../component/footer';
import Header from '../../component/header';
import api from '../../shared/api';



class Login extends Component {
   constructor(props){
       super(props)
       this.state = {
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

   makeLogin = async () =>{
    let data = {    
         email:this.state.email,
         password:this.state.password
        }

        this.setState({
            errorMsg: "" 
        });
    let response = await api.auth.login(data);
    if(response.success){
       localStorage.setItem("userInfo",JSON.stringify(response.data));
       localStorage.setItem("apiToken",response.data.api_token); 
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
      <div className="form-login-body">
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-12 mx-auto login-desk">
              <div className="row">
                  <div className="col-md-6 detail-box">
                      <div className="detailsh mb-30">
                          <button className="btn btn-sm btn-danger">JOIN THE COMMUNITY</button>
                      </div>
                  </div>
                  <div className="col-md-6 loginform">
                      <h4>Welcome Back</h4>
                      <div className="login-det">
                          <div style={{color:"red"}} className={this.state.errorMsg?'':'none'}>{this.state.errorMsg}</div>
                          <div className="form-row">
                              <label for="">Email Address</label>
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" name="email" onChange={this.setValues} placeholder="Email ID / Mobile" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                          <div className="form-row">
                              <label for="">Password</label>
                              <div className="input-group mb-3">
                                  <input type="password" className="form-control" name="password" onChange={this.setValues}  placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
  
  
                          <div className="form-row space-equal">
                              <button className="btn btn-sm btn-danger float-left" onClick={this.makeLogin}>Login</button>
                              <p className="forget float-right"><a href="">Forget Password?</a></p>
                          </div>
  
  
                      </div>
                      <div className="form-row space-equal clam mt-40">
  
                          <p className="forget float-right"><Link to={{pathname: "/register"}} >New User? </Link>
                              <br></br>
                              <a href="">Sign Up link available</a>
                          </p>
  
                          <button className="btn btn-sm btn-danger float-left dts">GET STARTED</button>
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

export default Login;
