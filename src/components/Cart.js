import ItemQty from "./ItemQty";
import ProductCard from "./ProductCard";
import OrderDetails from "./OrderDetails";
import { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let cartItems = () => {
    let cartKeys = Object.keys(cart);
    let item;

    return cartKeys.map((key) => {
      item = cart[key];
      return (
        <div key={key} className="productcard">
          <ProductCard item={item} />
          <ItemQty item={item} addBtnVisibility={"hide-add-to-cart"} />
        </div>
      );
    });
  };
  return (
    <div className="cart-page">
      <div></div>
      <div className="cart">{cartItems()}</div>
      <OrderDetails />
    </div>
  );
};
export default Cart;
