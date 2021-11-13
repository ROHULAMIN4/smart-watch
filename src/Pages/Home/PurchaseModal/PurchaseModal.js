import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const PurchaseModal = ({ handleClose, open, product }) => {
  const { user } = useAuth();
  const initialInfo = {
    email: user.email,
    productName: product.Name,

    price: product.price,
  };
  const [bookingInfo, setBookingInfo] = React.useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };

    newInfo[field] = value;

    setBookingInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const productInformation = {
      ...bookingInfo,
    };
    fetch("http://localhost:5000/salesrequiest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`Thanks for choosing porduct item= ${product.Name} `);
        }
      });
    handleClose();
    e.preventDefault();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ color: "tomato" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Purchase Order Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            disabled
            id="standard-basic"
            name="name"
            onBlur={handleOnBlur}
            value={product.Name}
            placeholder="Enter your Name"
            variant="standard"
          />

          <p></p>
          <TextField
            disabled
            onBlur={handleOnBlur}
            id="standard-basic"
            name="price"
            value={product.price}
            variant="standard"
          />
          <p></p>
          <TextField
            id="standard-basic"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            variant="standard"
          />
          <p></p>
          <TextField
            id="standard-basic"
            name="phoneNumber"
            onBlur={handleOnBlur}
            placeholder="Phone Number"
            variant="standard"
          />
          <p></p>
          <TextField
            name="address"
            placeholder="Address"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <p></p>
          <TextField
            name="name"
            placeholder="Buyer Name"
            onBlur={handleOnBlur}
            variant="standard"
          />

          <Button type="submit" variant="contained">
            Outlined
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PurchaseModal;
