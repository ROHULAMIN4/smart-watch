import logo from "./logo.svg";
import "./App.css";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/ContextProvider/ContextProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Home from "./Pages/Home/Home";
import Navigation from "./Shere/Navigation/Navigation";
import Footer from "./Shere/Navigation/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
