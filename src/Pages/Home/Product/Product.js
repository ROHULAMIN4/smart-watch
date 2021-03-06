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

      <PurchaseModal
        handleClose={handleClose}
        open={open}
        product={product}
      ></PurchaseModal>
    </>
  );
};

export default Product;
