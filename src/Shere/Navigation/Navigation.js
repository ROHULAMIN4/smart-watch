import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useFirebase/useAuth/useAuth";
import "./Navigation.css";
import { styled } from "@mui/material/styles";
const Navigation = () => {
  const [bg, setBg] = useState(false);
  const [bg2, setBg2] = useState(false);
  const [bg3, setBg3] = useState(false);
  const { user, logout } = useAuth();
  useEffect(() => {
    const changeBg = () => {
      if (window.pageYOffset > 100 && window.pageYOffset < 1099) {
        setBg(true);
        setBg2(false);
        setBg3(false);
      } else if (window.pageYOffset > 1100 && window.pageYOffset < 2000) {
        setBg(false);
        setBg2(true);
        setBg3(false);
      } else if (window.pageYOffset > 2001 && window.pageYOffset < 2899) {
        setBg(false);
        setBg2(true);
      } else if (window.pageYOffset > 2900 && window.pageYOffset < 4099) {
        setBg(false);
        setBg2(false);
        setBg3(true);
      } else {
        setBg(false);
        setBg2(true);
        setBg3(false);
      }
    };
    window.addEventListener("scroll", changeBg);

    return () => window.removeEventListener("scroll", changeBg);
  }, []);
  const Input = styled("input")({
    display: "none",
    paddingRight: "-50px",
  });
  return (
    <>
      {/* <nav className="navbar navbar-light " id="style-nav">
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
      </nav> */}
      {/* scroll */}
      {bg && (
        <nav className="navbar navbar-light" id="backBg">
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
      )}
      {/* 3rd conditon */}
      {bg3 && (
        <nav className="navbar navbar-light" id="backBg3">
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
      )}
      {/* 2nd  */}
      {bg2 && (
        <nav className="navbar navbar-light" id="style-nav">
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
      )}
    </>
  );
};

export default Navigation;
