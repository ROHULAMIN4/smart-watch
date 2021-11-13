import React from "react";
import "./product.css";
import Button from "@mui/material/Button";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const Product = ({ product }) => {
  const { Name, description, img, price } = product;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="col-lg-4 col-sm-12" data-aos="fade-down">
        <div className="card-Style">
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
        </div>
      </div>
      <PurchaseModal
        handleClose={handleClose}
        open={open}
        product={product}
      ></PurchaseModal>
    </>
  );
};

export default Product;
