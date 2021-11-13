import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SalesReport = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="shadow-lg mt-5 mb-5 p-4">
      <h3 className="text-warning">Last week Our Sales increaseing </h3>
      <div className="row bg-secondary p-4">
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-white">10%</h1>
          <small className="text-white">car sales babys</small>
        </div>
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h1 className="text-white">13%</h1>
          <small className="text-white">baby plastics toys</small>
        </div>
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-white">4%</h1>
          <small className="text-white">Expensive china toys products</small>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
