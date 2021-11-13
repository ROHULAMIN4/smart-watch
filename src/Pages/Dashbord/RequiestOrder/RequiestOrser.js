import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RequiestOrser = ({ product }) => {
  const { Name, price, img, description } = product;
  return (
    <>
      <div className="col-lg-4 col-sm-12" data-aos="fade-up-left">
        <div className="card-Style">
          <img
            style={{ width: "300", height: "300px", borderRadius: "50%" }}
            src={img}
            alt=""
          />
          <h4 className="text-success">{Name}</h4>
          <p>{description}</p>
          <p className="fs-4 fw-bold text-secondary">Price:{price}</p>
          <Button sx={{ mb: 4 }} variant="contained">
            Purchase
          </Button>
          <Link to="/">
            <Button sx={{ mb: 4, ml: 4 }} variant="contained">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RequiestOrser;
