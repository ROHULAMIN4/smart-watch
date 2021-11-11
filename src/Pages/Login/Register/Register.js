import {
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, authError, user } = useAuth();
  const hanleOnBlue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleForm = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password didnot mach");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <div>
      <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
        Register
      </Typography>
      {!isLoading && (
        <form onSubmit={handleForm}>
          <TextField
            id="standard-basic"
            sx={{ width: "25%", m: 1 }}
            label="Your Name"
            type="text"
            name="displayName"
            onBlur={hanleOnBlue}
            variant="standard"
          />
          <p></p>
          <TextField
            id="standard-basic"
            sx={{ width: "25%", m: 1 }}
            label="Your Email"
            type="email"
            name="email"
            onBlur={hanleOnBlue}
            variant="standard"
          />
          <p></p>
          <TextField
            id="standard-basic"
            sx={{ width: "25%", m: 1 }}
            label="Your Password"
            type="password"
            name="password"
            onBlur={hanleOnBlue}
            variant="standard"
          />
          <p></p>
          <TextField
            id="standard-basic"
            sx={{ width: "25%", m: 1 }}
            label="Confirm password"
            type="password"
            name="password2"
            onBlur={hanleOnBlue}
            variant="standard"
          />
          <p></p>
          <Button type="submit" sx={{ width: "25%", m: 1 }} variant="contained">
            Sign In
          </Button>
          <p></p>
          <Link to="/login">
            <Button variant="text"> Alrady have Account? please Login</Button>
          </Link>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
      {user?.email && <Link to="/">back to home</Link>}
    </div>
  );
};

export default Register;
