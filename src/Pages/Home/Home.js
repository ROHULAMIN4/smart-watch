import React from "react";
import Footer from "../../Shere/Navigation/Footer/Footer";
import Navigation from "../../Shere/Navigation/Navigation";
import Banner from "./Banner";
import Product from "./Product";
import Review from "./Review";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Product></Product>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
