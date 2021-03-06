import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/MyCartComponents/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import ModalPopUp from './Components/ModalPopUp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/online-shopping/" component={ProductList} />
          <Route path="/online-shopping/details" component={Details} />
          <Route path="/online-shopping/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <ModalPopUp/>
      </React.Fragment>
    );
  }
}

export default App;
