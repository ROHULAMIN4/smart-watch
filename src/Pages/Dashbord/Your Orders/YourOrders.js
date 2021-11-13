import React from "react";

const YourOrders = ({ product }) => {
  const { productName, price, email } = product;
  console.log(product);
  return (
    <div className="col-lg-12,col-sm-12">
      <h6>
        productName: <span className={"me-5 text-success"}>{productName}</span>{" "}
        price:
        <span className={"me-5 text-success"}> {price}</span>
        ContactEmail: <span className={"me-5 text-success"}>{email}</span>
      </h6>
    </div>
  );
};

export default YourOrders;
