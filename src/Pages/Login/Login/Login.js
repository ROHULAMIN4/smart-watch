import {
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, authError, user } = useAuth();
  const hanleOnBlue = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[filed] = value;
    setLoginData(newLoginData);
  };
  const handleForm = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="row login-box">
      <div className="col-lg-6 col-md-6 col-sm-12 email-box">
        <Typography
          className="login-title"
          sx={{ mt: 5 }}
          variant="body1"
          gutterBottom
        >
          Log in
        </Typography>
        <form onSubmit={handleForm}>
          <TextField
            className="email-section"
            id="outlined-basic"
            sx={{ width: "50%", m: 1 }}
            label="Your Email"
            type="email"
            name="email"
            onBlur={hanleOnBlue}
            variant="outlined"
            label="Email"
          />
          <p></p>
          <TextField
            className="email-section"
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "50%", m: 1 }}
            label="Your Password"
            type="password"
            name="password"
            onBlur={hanleOnBlue}
            label="Password"
          />
          <p></p>
          <Button type="submit" sx={{ width: "25%", m: 1 }} variant="contained">
            Sign In
          </Button>
          <p></p>
          <Link to="/Register">
            <Button className="register-btn" variant="text">
              Create account
            </Button>
          </Link>
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </form>
      </div>
      <div className="col-lg-6 col-md-6 sm-12 login-img">
        <img src="https://i.ibb.co/FHJY3nb/4957136.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
