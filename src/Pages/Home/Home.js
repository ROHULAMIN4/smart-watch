import React from "react";
import Footer from "../../Shere/Navigation/Footer/Footer";
import Navigation from "../../Shere/Navigation/Navigation";
import SalesReport from "../SalesReport/SalesReport";
import Banner from "./Banner";
import Hotproducts from "./HotProducts/Hotproducts";
import Map from "./Map";

import Products from "./Products/Products";

import Review from "./Review";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Hotproducts></Hotproducts>
      <Review></Review>
      {/* <Map></Map> */}
      {/* <SalesReport></SalesReport>   */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
