import React, { useEffect, useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [currentProd, setCurrentProd] = useState({});
  const [products] = useState({
    1: { img: "../images/1.jpg", name: "PC Case", price: "5.99", qty: 0, id: 1 },
    2: { img: "../images/2.jpg", name: "PC Case", price: "6.99", qty: 0, id: 2 },
    3: { img: "../images/3.jpg", name: "PC Case", price: "7.99", qty: 0, id: 3 },
    4: { img: "../images/4.jpg", name: "PC Case", price: "8.99", qty: 0, id: 4 },
    5: { img: "../images/5.jpg", name: "PC Case", price: "9.99", qty: 0, id: 5 },
    6: { img: "../images/6.jpg", name: "PC Case", price: "55.99", qty: 0, id: 6 },
    7: { img: "../images/7.jpg", name: "PC Case", price: "56.99", qty: 0, id: 7 },
    8: { img: "../images/8.jpg", name: "PC Case", price: "57.99", qty: 0, id: 8 },
    9: { img: "../images/9.jpg", name: "PC Case", price: "58.99", qty: 0, id: 9 },
    10: { img: "../images/10.jpg", name: "PC Case", price: "59.99", qty: 0, id: 10 },
    11: { img: "../images/11.png", name: "PC Case", price: "65.99", qty: 0, id: 11 },
    12: { img: "../images/12.jpg", name: "PC Case", price: "66.99", qty: 0, id: 12 },
  });

  useEffect(() => {
    setCart((prevCart) => {
      let copy = { ...prevCart };
      delete copy.undefined;
      copy[currentProd.id] = currentProd;
      return copy;
    });
  }, [currentProd]);

  useEffect(() => {
    setQuantity(() => {
      let cartKeys = Object.keys(cart);
      let qty = cartKeys.map((key) => {
        return cart[key].qty;
      });
      if (qty.length === 0) return 0;
      return qty.reduce((int1, int2) => int1 + int2);
    });
  }, [cart]);

  let subTotal = () => {
    let cartKeys = Object.keys(cart);
    let totalsArr = cartKeys.map((key) => {
      return Number(cart[key].price * cart[key].qty);
    });
    let subTotal = totalsArr.reduce((int1, int2) => int1 + int2);
    return subTotal.toFixed(2);
  };

  return (
    <div>
      <CartContext.Provider value={{ cart: cart, subTotal: subTotal, quantity: quantity }}>
        <ProdContext.Provider value={{ currentProd: currentProd, setProd: setCurrentProd }}>
          <BrowserRouter>
            <NavBar />
            <main>
              <Switch>
                <Route path="/item/:id" component={Item} />
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/shop" render={(props) => <Shop {...props} products={products} />} />
              </Switch>
            </main>
          </BrowserRouter>
        </ProdContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;
export const CartContext = React.createContext();
export const ProdContext = React.createContext();
