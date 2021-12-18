import React from "react";
import Typist from "react-typist";
import "./Review.css";

const ReviewProduct = ({ product }) => {
  const { Name, Review } = product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="product-rendering-style">
        <h4 className="review-name pt-2">Name:{Name}</h4>
        <p className="text-secondary p-4"> description-review:{Review}</p>
        <div className="product-rendering-style1">
          <h4 className="review-name1 pt-2">Name:{Name}</h4>
          <p className="text-secondary1 p-4">
            Wie lieb du liebe ruft weh du der lachtet feuchten verschwand. Ich
            es zurück hast und so niedlich treibt, friedlich gerne in gut es
            bester.Wie lieb du liebe ruft weh du der lachtet feuchten
            verschwand. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
