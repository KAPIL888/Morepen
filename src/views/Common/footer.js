import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-area bg-img" >
          <div className="container-fluid">
            <div className="footer-top pt-80 pb-25">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="footer-ml-30">
                    <div className="row">
                      <div className="col-xl-3 col-md-6 col-md-6 col-sm-6 col-6">
                        <div className="footer-widget mb-55">
                          <p>Dr.Morepen Laboratories Ltd.</p>
                          <p>409, Antriksh Bhawan</p>
                          <p>Kasturba Gandhi Marg</p>
                          <p>New Delhi - 110001</p>
                          <h3 className="footer-title-3">ABOUT US</h3>
                                            <div className="footer-info-list-2">
                                                <ul>
                                                    <li><a href="#">Overview</a></li>
                                                    <li><a href="#">Vision, Mission & Values</a></li>
                                                    <li><a href="#">Our Journey (History & Milestone)</a></li>
                                                    <li><a href="#">Our Founder</a></li>
                                                    <li><a href="#">Executive Team</a></li>
                                                     <li><a href="#">R&D Facility</a></li>
                                                    <li><a href="#">Awards & Recognition</a></li>
                                                </ul>
                                            </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-md-6 col-sm-6 col-6">
                        <div className="footer-widget mb-55">
                          <h3 className="footer-title-3">SHOP</h3>

                          <h3 className="footer-title-3">HYGIENE</h3>
                          <div className="footer-info-list-2">
                            <ul>
                              <li><a href="#">Personal Hygiene</a></li>
                            </ul>
                          </div>
                          <br></br>
                          <h3 className="footer-title-3">NUTRITION & PREVENTION</h3>
                          <div className="footer-info-list-2">
                            <ul>
                              <li><a href="#">Nutrition</a></li>
                              <li><a href="#">Immunity Boosters</a></li>
                              <li><a href="#">Hemoglobin Booster</a></li>
                              <li><a href="#">Oral Health</a></li>
                              <li><a href="#">Heart Health</a></li>
                              <li><a href="#">Liver Health</a></li>
                              <li><a href="#">Skin Health</a></li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget footer-mrg-3 mb-55">
                          <h3 className="footer-title-3">CARE</h3>
                          <div className="footer-info-list-2">
                            <ul>
                              <li><a href="#">Burnol</a></li>
                              <li><a href="#">Cold & Cough</a></li>
                              <li><a href="#">Cough Relief</a></li>
                              <li><a href="#">Pain Relief</a></li>
                              <li><a href="#">Fever</a></li>
                              <li><a href="#">Acidity Relief</a></li>
                              <li><a href="#">Multi-Vitamins</a></li>
                              <li><a href="#">Dehydration</a></li>
                              <li><a href="#">Stomach Care</a></li>
                              <li><a href="#">Bone Care</a></li>
                              <li><a href="#">Sexual Wellness</a></li>
                              <li><a href="#">Pregnancy</a></li>
                              <li><a href="#">Infection & Care</a></li>
                            </ul>
                          </div>
                        </div>
                        <h3 className="footer-title-3">Follow Us on</h3>
                        <div className="footer-info-list-2">
                          <a href="#"><img src="assets/images/slider/in.png" /></a>
                          <a href="#"><img src="assets/images/slider/fb.png" /></a>
                          <a href="#"><img src="assets/images/slider/ins.png" /></a>
                          <a href="#"><img src="assets/images/slider/you.png" /></a>
                          <a href="#"><img src="assets/images/slider/tw.png" /></a>
                        </div>
                      </div>

                      <div className="col-xl-3 col-md-6 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget mb-55">
                          <h3 className="footer-title-3">BE BEAUTIFUL & FIT</h3>
                          <div className="footer-info-list-2">
                            <ul>
                              <li><a href="#">CUSTOMER STORIES</a></li>
                              <li><a href="#">HEALTH & CARE TIPS</a></li>
                              <li><a href="#">HEALTH BLOGS</a></li>
                              <li><a href="#">NUTRITION & DIET</a></li>
                              <li><a href="#">QUICK VIDEOS</a></li>
                              <li><a href="#">CUSTOMER CARE</a></li>
                              <li><a href="#">UPDATES</a></li>
                              <li><a href="#">BUY NOW</a></li>
                              <li><a href="#">TERMS & CONDITIONS </a></li>
                              <li><a href="#">SHIPPING</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer-area ">
          <div className="container pt-40">
            <div className="footer-bottom footer-bottom-pb">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <div className="copyright text-center">
                    <p>© 2020 Dr.Morepen. All Rights Reserved. *DISCLAIMER: Lorum ipsum  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qui</p>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="footer-payment footer-payment-right  text-center">
                    <a href="#"><img src="assets/images/slider/payop.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;