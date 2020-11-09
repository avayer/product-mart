import React from 'react';
import { Link } from 'react-router-dom';

import NavbarComponent from './ui-components/NavbarComponent';
import './landing.css';

const Landing = () => {

    return (
      <div>
        <NavbarComponent />
        <div class="carouselDiv">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2018/10/10095425/ecommerce-solutions-intro-img.jpg"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Freedom Sale</h5>
                  <p>Big Savings on our products.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2018/10/10095425/ecommerce-solutions-intro-img.jpg"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Product Mart</h5>
                  <p>One stop for all your needs.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2018/10/10095425/ecommerce-solutions-intro-img.jpg"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Shopping</h5>
                  <p>Shop online and win prizes</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <section class="text-center about">
          <h1>About US</h1>
          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-sm-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-group"></span>
                <h2>Fully functional</h2>
                <p class="lead">
                  Login to app to view all features available in the platform
                </p>
              </div>
              <div
                class="col-lg-3 col-sm-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-info"></span>
                <h2>Statistics</h2>
                <p class="lead">
                  View the product statistics based on popularity
                </p>  
              </div>
              <div class="clearfix visible-md-block visible-sm-block"></div>
              <div
                class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-shopping-cart"></span>
                <h2>Shop products</h2>
                <p class="lead">
                  Select from a wide range of available products
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div>
              <div className="row">
                <div
                  className="col-sm-12 col-lg-5"
                  style={{ textAlign: "center", marginTop: "10%" }}
                >
                  <div>
                    <h2>CONTACT US</h2>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <form>
                        <input type="hidden" data-form-email="true" />
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            required=""
                            placeholder="Name*"
                            data-form-field="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            required=""
                            placeholder="Email*"
                            data-form-field="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="Phone"
                            data-form-field="Phone"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            rows="7"
                            data-form-field="Message"
                          ></textarea>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-lg btn-danger"
                          >
                            CONTACT US
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="bg-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-6">
                <p class="copyright-text">
                  &copy; Product Mart 2020 All Rights Reserved
                  <br />
                  Designed by Avayer.
                </p>
              </div>
              <div class="col-xs-6">
                <ul class="social-icons">
                  <li>
                    <a class="facebook" href="http://www.facebook.com">
                      <i class="fa fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="http://www.twitter.com">
                      <i class="fa fa-twitter fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a class="dribbble" href="http://www.dribble.com">
                      <i class="fa fa-dribbble fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="http://www.linkedin.com">
                      <i class="fa fa-linkedin fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Landing;