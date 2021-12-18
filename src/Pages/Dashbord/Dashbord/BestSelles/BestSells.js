import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const BestSells = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [descript, setDescrip] = useState("");
  const [img, setImg] = useState(null);
  const hanleSubmit = (e) => {
    if (!img) {
      return;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("descript", descript);
    formData.append("images", img);

    fetch("http://localhost:5000/bestSelles", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully");
          // (name = ""), (price = ""), (descript = ""), (img = "");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.preventDefault();
  };
  return (
    <form onSubmit={hanleSubmit}>
      <TextField
        id="standard-basic"
        required
        type="name"
        label="Name"
        onChange={(e) => setName(e.target.value)}
        variant="standard"
        sx={{ width: "50%" }}
      />
      <br />
      <TextField
        sx={{ width: "50%" }}
        id="standard-basic"
        onChange={(e) => setPrice(e.target.value)}
        required
        type="number"
        label="Price"
        variant="standard"
      />
      <br />
      <TextField
        sx={{ width: "50%" }}
        id="standard-basic"
        onChange={(e) => setDescrip(e.target.value)}
        required
        type="description"
        label="Description"
        variant="standard"
      />
      <br />
      <Input
        accept="image/*"
        type="file"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <br />
      <p></p>
      <p></p>
      <Button sx={{ width: "50%" }} variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BestSells;
