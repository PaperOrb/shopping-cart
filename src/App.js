import React from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
