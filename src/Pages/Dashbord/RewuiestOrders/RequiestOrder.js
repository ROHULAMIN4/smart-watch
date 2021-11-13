import React, { useState, useEffect } from "react";
import RequiestOrser from "../RequiestOrder/RequiestOrser";
import AOS from "aos";
import "aos/dist/aos.css";
const RequiestOrder = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    AOS.init();
  }, []);
  return (
    <div className="row">
      {products.map((result) => (
        <RequiestOrser product={result}></RequiestOrser>
      ))}
    </div>
  );
};

export default RequiestOrder;
