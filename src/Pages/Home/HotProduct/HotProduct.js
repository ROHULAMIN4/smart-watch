
import React from "react";


const HotProduct = ({ sell }) => {
  const { name, price, desc, image } = sell;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card-Style">
          <img
            style={{ width: "100%", height: "100%" }}
            src={`data:image/jpeg;base64,${image}`}
          />
          <div className="transition-img">
            <h4 className="text-warning pt-4">{name}</h4>
            <p>{desc}</p>
            <p className="fs-4 fw-bold text-info">Price:{price}</p>
            <button type="button" class="btn btn-success">
              Add To card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProduct;
