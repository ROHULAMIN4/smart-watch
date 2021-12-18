import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PurchaseModal from "../../Home/PurchaseModal/PurchaseModal";
import "./RequiestOrder.css";
const RequiestOrser = ({ product }) => {
  const { Name, price, img, description } = product;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae
        voluptates ipsum ratione laboriosam nostrum autem aspernatur,
        asperiores, adipisci nihil reprehenderit aliquam consequatur?
      </p> */}
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card-Style">
          <img style={{ width: "100%", height: "100%" }} src={img} alt="" />
          <div className="transition-img">
            <h4 className="text-warning pt-4">{Name}</h4>
            <p>{description}</p>
            <p className="fs-4 fw-bold text-info">Price:{price}</p>
            <button onClick={handleOpen} type="button" class="btn btn-success">
              Add To card
            </button>

            {/* <Button onClick={handleOpen} sx={{ mb: 4 }} variant="contained">
              Purchase
            </Button> */}
          </div>
        </div>
      </div>
      {/* <div className="col-lg-4 col-sm-12" data-aos="fade-up-left">
        <div className="card-Style1">
          <img
            style={{ width: "300", height: "300px", borderRadius: "50%" }}
            src={img}
            alt=""
          />
          <h4 className="text-success">{Name}</h4>
          <p>{description}</p>
          <p className="fs-4 fw-bold text-secondary">Price:{price}</p>
          <Button onClick={handleOpen} sx={{ mb: 4 }} variant="contained">
            Purchase
          </Button>
          <Link to="/">
            <Button sx={{ mb: 4, ml: 4 }} variant="contained">
              Back to Home
            </Button>
          </Link>
        </div>
      </div> */}
      <PurchaseModal
        handleClose={handleClose}
        open={open}
        product={product}
      ></PurchaseModal>
    </>
  );
};

export default RequiestOrser;
