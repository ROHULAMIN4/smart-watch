import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    AOS.init();
  }, []);
  return (
    <div>
      <h3 className="mt-5 mb-5 text-secondary fs-4">
        <i>Our some demo Products</i>
      </h3>
      <div className="row">
        {products
          .map((product) => <Product product={product}></Product>)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default Products;
