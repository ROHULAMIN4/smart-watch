import React from "react";
import Footer from "../../Shere/Navigation/Footer/Footer";
import Navigation from "../../Shere/Navigation/Navigation";
import SalesReport from "../SalesReport/SalesReport";
import Banner from "./Banner";
import Products from "./Products/Products";

import Review from "./Review";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>

      <SalesReport></SalesReport>
      <Footer></Footer>
    </div>
  );
};

export default Home;
