import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";
import YourOrders from "../Your Orders/YourOrders";
import "./Dashnord.css";
const DashbordHome = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://salty-fortress-77279.herokuapp.com/salesrequiest?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const Price = products.reduce(
    (sum, product) => sum + parseInt(product.price),
    0
  );

  const DelivaryCharge = 50;
  const tax = Price / 20;
  const totall = Price + DelivaryCharge + tax;

  const hanldeSubmit = (e) => {
    // update api

    e.preventDefault();
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <img
            className="img-manage"
            src="https://image.freepik.com/free-vector/shopping-mobile-app-online-store-service-smartphone-application-internet-purchase-making-order-customer-cartoon-character-adding-product-cart_335657-2557.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 order-img">
          <h3>Totall order items : {products.length}</h3>
          <div className="order">
            <table className="manage">
              <tr>
                <td>Price </td>
                <td>:{Price}</td>
              </tr>
              <tr>
                <td>Delivary </td>
                <td>:{DelivaryCharge}</td>
              </tr>
              <tr>
                <td>Tax </td>
                <td>: {tax}</td>
              </tr>
              <tr>
                <td>Totall </td>
                <td>:{totall}</td>
              </tr>
              <button
                onClick={hanldeSubmit}
                type="button"
                className="btn btn-primary w-100 ms-5 mt-3"
              >
                Order
              </button>
            </table>
          </div>
        </div>
        <p className="text-danger mt-4">*Payment system not added*</p>
      </div>

      <div className="row">
        {products.map((product) => (
          <div>
            {/* <h2>{product.name}</h2> */}
            <YourOrders totall={totall} product={product}></YourOrders>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashbordHome;
