import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useFirebase/useAuth/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Baby toys
          </Typography>
          <Link
            style={{ color: "tomato", textDecoration: "none" }}
            to="/totallOrder"
          >
            Products
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/dashbord"
          >
            <Button color="inherit">Dashbord</Button>
          </Link>
          {user?.email ? (
            <Box>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
