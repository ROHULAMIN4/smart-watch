import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/makeadmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <h4 className="text-success">Make Admin</h4>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <p></p>
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Created Admin successfully </Alert>}
    </div>
  );
};

export default MakeAdmin;
