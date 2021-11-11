import React from "react";
import "./Product.css";

const ReviewProduct = ({ product }) => {
  const { Name, Review } = product;
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="product-style">
        <h4 className="text-success pt-2">Name:{Name}</h4>
        <p className="text-secondary p-4"> description-review:{Review}</p>
      </div>
    </div>
  );
};

export default ReviewProduct;
