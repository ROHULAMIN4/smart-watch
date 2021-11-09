import React from "react";
import Navigation from "../../Shere/Navigation/Navigation";
import Banner from "./Banner";
import Product from "./Product";
import Review from "./Review";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Product></Product>
      <Review></Review>
    </div>
  );
};

export default Home;
