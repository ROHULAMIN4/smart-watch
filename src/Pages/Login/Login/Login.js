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
    <div>
      <Typography sx={{ mt: 5 }} variant="body1" gutterBottom>
        Log in
      </Typography>
      <form onSubmit={handleForm}>
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
        <Button type="submit" sx={{ width: "25%", m: 1 }} variant="contained">
          Sign In
        </Button>
        <p></p>
        <Link to="/Register">
          <Button variant="text">New user? please register</Button>
        </Link>
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </form>
    </div>
  );
};

export default Login;
