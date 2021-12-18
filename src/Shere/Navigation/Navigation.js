import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useFirebase/useAuth/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <nav className="navbar navbar-light  style-nav ">
        <div className="container-fluid container">
          <h2 className="header-name"> Smart Watch</h2>
          <input
            placeholder="Serch here"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              paddingLeft: "7px",
              border: "1px solid tomato",
            }}
            type="text"
          />

          <form class="d-flex">
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                paddingTop: "5px",
                paddingRight: "5px",
              }}
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
                <button
                  onClick={logout}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  <span style={{ color: "white" }}> Log out</span>
                </button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "success" }}
                to="/login"
              >
                <button type="button" className="btn btn-outline-primary">
                  <span style={{ color: "white" }}> Log in</span>
                </button>
              </NavLink>
            )}
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
