import React, { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = () => {
  const products = useState([
    { img: "../images/1.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/2.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/3.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/4.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/5.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/6.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/7.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/8.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/9.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/10.jpg", name: "PC Case", price: "$5.99" },
    { img: "../images/11.png", name: "PC Case", price: "$5.99" },
    { img: "../images/12.jpg", name: "PC Case", price: "$5.99" },
  ]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/item" component={Item} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Shop" render={(props) => <Shop {...props} products={products} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
