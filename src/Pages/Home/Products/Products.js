import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    AOS.init();
  }, []);

  return (
    <div className="background-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#40E0D0"
          fill-opacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,96C560,85,640,107,720,122.7C800,139,880,149,960,170.7C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <h3 className="svg-style text-center mb-5">Hot Products</h3>
      <div className="row">
        {products
          .map((product) => <Product product={product}></Product>)
          .slice(0, 8)}
      </div>
      {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab totam id
        voluptatem eum, autem repellat excepturi repudiandae eligendi
        dignissimos commodi neque vel harum soluta minus sapiente odit laborum
        aut doloribus similique saepe quo nemo.
      </p> */}
    </div>
  );
};

export default Products;
