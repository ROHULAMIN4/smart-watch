import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashbordHome from "../Dashbordhome/DashbordHome";
import Addproduct from "./AddProduct/Addproduct";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  let { path, url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NavLink
          style={{ textDecoration: "none", color: "blue", fontWeight: "900" }}
          to="/home"
        >
          <Button style={{ color: "tomato" }} color="inherit">
            Back to Home
          </Button>
        </NavLink>
        <p></p>
        <Link style={{ textDecoration: "none", color: "teal" }} to={`${url}`}>
          DashbordHome
        </Link>
        <p></p>
        <Link
          style={{ textDecoration: "none", color: "teal" }}
          to={`${url}/review`}
        >
          Review Product
        </Link>
        <p></p>
        {admin && (
          <Box>
            <Link
              style={{ textDecoration: "none", color: "teal" }}
              to={`${url}/addproduct`}
            >
              AddProduct
            </Link>

            <p></p>
            <Link
              style={{ textDecoration: "none", color: "teal" }}
              to={`${url}/makeadmin`}
            >
              Make Admin
            </Link>
          </Box>
        )}
        {user?.email ? (
          <Button onClick={logout} style={{ color: "tomato" }} color="inherit">
            logOut
          </Button>
        ) : (
          <Button style={{ color: "tomato" }} color="inherit">
            ''
          </Button>
        )}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashbordHome></DashbordHome>
          </Route>
          <Route path={`${path}/addproduct`}>
            <Addproduct></Addproduct>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>

          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
