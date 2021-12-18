import React from "react";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const HotProduct = ({ sell }) => {
  const { name, price, desc, image } = sell;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <button onClick={handleOpen} type="button" class="btn btn-success">
              Add To card
            </button>

            {/* <Button onClick={handleOpen} sx={{ mb: 4 }} variant="contained">
              Purchase
            </Button> */}
          </div>
        </div>
      </div>
      {/* <PurchaseModal
        handleClose={handleClose}
        open={open}
        sell={sell}
      ></PurchaseModal> */}
    </>
  );
};

export default HotProduct;
