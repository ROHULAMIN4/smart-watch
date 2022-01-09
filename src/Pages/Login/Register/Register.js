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
    <div className="row login-box">
      <div className="col-lg-6 col-ms-6 col-sm-12 email-box">
        <div>
          <Typography
            className="login-title"
            sx={{ mt: 5 }}
            variant="body1"
            gutterBottom
          >
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleForm}>
              <TextField
                className="email-section"
                id="standard-basic"
                sx={{ width: "50%", m: 1 }}
                label="Your Name"
                type="text"
                name="displayName"
                onBlur={hanleOnBlue}
                id="outlined-basic"
                variant="outlined"
              />
              <p></p>
              <TextField
                className="email-section"
                id="standard-basic"
                sx={{ width: "50%", m: 1 }}
                label="Your Email"
                type="email"
                name="email"
                onBlur={hanleOnBlue}
                id="outlined-basic"
                variant="outlined"
              />
              <p></p>
              <TextField
                className="email-section"
                id="standard-basic"
                sx={{ width: "50%", m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                onBlur={hanleOnBlue}
                id="outlined-basic"
                variant="outlined"
              />
              <p></p>
              <TextField
                className="email-section"
                id="standard-basic"
                sx={{ width: "50%", m: 1 }}
                label="Confirm password"
                type="password"
                name="password2"
                onBlur={hanleOnBlue}
                id="outlined-basic"
                variant="outlined"
              />
              <p></p>
              <Button
                type="submit"
                sx={{ width: "50%", m: 1 }}
                variant="contained"
              >
                Sign In
              </Button>
              <p></p>
              <Link to="/login">
                <Button className="register-btn" variant="text">
                  Alrady have Account? please Login
                </Button>
              </Link>
            </form>
          )}
          {user?.email && <Link to="/">back to home</Link>}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}

          {authError && <Alert severity="error">{authError}</Alert>}
        </div>
      </div>
      <div className="col-lg-6 col-ms-6 col-sm-12 login-img">
        <img src="https://i.ibb.co/9cdJ0W5/Mobile-login.jpg" alt="" />
      </div>
    </div>
  );
};

export default Register;
