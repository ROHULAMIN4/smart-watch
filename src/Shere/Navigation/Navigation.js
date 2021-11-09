import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "@mui/material/Button";
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-warning" sticky="top">
            BABY TOYS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {user.email ? (
              <Button
                style={{ textDecoration: "none", color: "white" }}
                onClick={logOut}
                color="inherit"
              >
                logOut
              </Button>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                Login
              </Link>
            )}

            <Navbar.Text className="text-white">
              <span className="text-warning">{user.displayName}</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
