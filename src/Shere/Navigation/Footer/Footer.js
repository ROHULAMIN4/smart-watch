import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-black pb-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 text-white-style">
          <h6 className="mb-4 pt-4">About Us</h6> <hr className="text-white" />
          <small className="mb-4 p-2">
            Are you looking for Best Quality Toys? Your most trusted kids store
            in Bangladesh got you covered. Visit our branch at #Banani &
            #Dhanmondi or order us online and grab the best quality and Cutest
            baby & kids products and get the best shopping experience everyday
          </small>
          <p className="mt-4">
            <i class="fas fa-phone"></i> : +880188343874
          </p>
          <p className="mt-4">
            <i class="fas fa-map-marker"></i> ; Dhaka doher
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h6 className="mb-4 pt-4 text-white">Latest Products </h6>
          <p className="latestProduct">
            Horse Rider <small className="latesProductPrice">= 150 </small>{" "}
          </p>
          <p className="latestProduct">
            Horse Rocking Bed{" "}
            <small className="latesProductPrice">= 340 </small>{" "}
          </p>
          <p className="latestProduct">
            Taddy bear <small className="latesProductPrice">= 600 </small>{" "}
          </p>
          <p className="latestProduct">
            RC Helicopter <small className="latesProductPrice">= 1200 </small>{" "}
          </p>
          <p className="latestProduct">
            Alpha bed puzzle <small className="latesProductPrice">= 190</small>{" "}
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-white">
          <h6 className="mb-4 pt-4 "> Contact Us</h6>
          <hr className="text-white" />
          <p className="mb-4">
            Head office <span className="mb-4 text-warning">: Dhaka doher</span>
          </p>
          <p className="mb-4">
            Second office{" "}
            <span className="mb-4 text-warning">: Dhaka Nobabgonj</span>
          </p>
          <h6 className="text-success">Contact with Social Media</h6>
          <span>
            <a href="https://www.facebook.com/urmi.rd">
              <i class="fab fa-facebook pe-4 text-white"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/RohulAm16659212">
              <i class="fab fa-twitter text-primary pe-4"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/rohul-amin-2555b3216/">
              <i class="fab fa-linkedin-in pe-4 text-primary"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/rohulamin24/">
              <i class="fab fa-instagram pe-4 text-danger"></i>
            </a>
          </span>
          <span>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <i class="fas fa-envelope text-warning"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
