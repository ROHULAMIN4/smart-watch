import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";
import YourOrders from "../Your Orders/YourOrders";

const DashbordHome = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://salty-fortress-77279.herokuapp.com/salesrequiest?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row">
      {products.map((product) => (
        <YourOrders product={product}></YourOrders>
      ))}
    </div>
  );
};

export default DashbordHome;
