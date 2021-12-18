import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/Autprovider";
import ResponsiveDrawer from "./Pages/Dashbord/Dashbord/Dashbord";
import RequiestOrder from "./Pages/Dashbord/RewuiestOrders/RequiestOrder";
import Home from "./Pages/Home/Home";
import { css } from "@emotion/react";

import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

import RingLoader from "react-spinners/RingLoader";
import { useState } from "react";
import { useEffect } from "react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function App() {
  const [loadin, setLoading] = useState(false);
  let [color, setColor] = useState("#1A81B6");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <div className="">
          {loadin ? (
            <div className="spiner-style App">
              <RingLoader
                color={color}
                loading={loadin}
                css={override}
                size={150}
              />
            </div>
          ) : (
            <div className="App">
              <AuthProvider>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/">
                      <Home></Home>
                    </Route>
                    <Route path="/home">
                      <Home></Home>
                    </Route>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <Route path="/Register">
                      <Register></Register>
                    </Route>
                    <Route path="/totallOrder">
                      <RequiestOrder></RequiestOrder>
                    </Route>
                    <PrivateRoute path="/dashbord">
                      <ResponsiveDrawer></ResponsiveDrawer>
                    </PrivateRoute>
                    <Route path="*">
                      <NotFound></NotFound>
                    </Route>
                  </Switch>
                </BrowserRouter>
              </AuthProvider>
            </div>
          )}
        </div>
      </div>
    </>
    // <div className="App">
    //   <AuthProvider>
    //     <BrowserRouter>
    //       <Switch>
    //         <Route exact path="/">
    //           <Home></Home>
    //         </Route>
    //         <Route path="/home">
    //           <Home></Home>
    //         </Route>
    //         <Route path="/login">
    //           <Login></Login>
    //         </Route>
    //         <Route path="/Register">
    //           <Register></Register>
    //         </Route>
    //         <Route path="/totallOrder">
    //           <RequiestOrder></RequiestOrder>
    //         </Route>
    //         <PrivateRoute path="/dashbord">
    //           <ResponsiveDrawer></ResponsiveDrawer>
    //         </PrivateRoute>
    //         <Route path="*">
    //           <NotFound></NotFound>
    //         </Route>
    //       </Switch>
    //     </BrowserRouter>
    //   </AuthProvider>
    // </div>
  );
}

export default App;
