import React, { useState } from "react";
import { useEffect } from "react";
import HotProduct from "../HotProduct/HotProduct";

const Hotproducts = () => {
  const [selles, setSelles] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/bestSelles")
      .then((res) => res.json())
      .then((data) => setSelles(data));
  }, []);
  return (
    <>
      <h3 className="svg-style text-center mb-5 mt-5">Best Selles</h3>
      <div className="row">
        {selles.map((sell) => (
          <HotProduct sell={sell} key={sell._id}></HotProduct>
        ))}
      </div>
    </>
  );
};

export default Hotproducts;
