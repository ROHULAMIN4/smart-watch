import React, { useState, useEffect } from "react";
import RequiestOrser from "../RequiestOrder/RequiestOrser";
import AOS from "aos";
import "aos/dist/aos.css";
import Hotproducts from "../../Home/HotProducts/Hotproducts";

const RequiestOrder = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    AOS.init();
  }, []);
  return (
    <>
      <h2 className="svg-style text-center mb-5 mt-2">
        world best watch collection
      </h2>
      <div className="row">
        {products.map((result) => (
          <RequiestOrser product={result}></RequiestOrser>
        ))}
      </div>
      <Hotproducts></Hotproducts>
    </>
  );
};

export default RequiestOrder;
