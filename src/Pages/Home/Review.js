import React, { useEffect, useState } from "react";
import ReviewProduct from "./ReviewProduct";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <>
      <h3 className="text-secondary mt-5 mb-5">
        <i>happy Client Review</i>
      </h3>
      <div className="row">
        {review.map((rev) => (
          <ReviewProduct key={rev._id} product={rev}></ReviewProduct>
        ))}
      </div>
    </>
  );
};

export default Review;
