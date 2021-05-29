import ItemQty from "./ItemQty";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let cartItems = () => {
    let cartKeys = Object.keys(cart);
    cartKeys = cartKeys.filter((key) => !(key === "undefined"));
    let item;

    return cartKeys.map((key) => {
      item = cart[key];
      console.log(cartKeys);
      return (
        <div className="productcard">
          <ProductCard key={key} item={item} />
          <ItemQty item={item} addBtnVisibility={"hide-add-to-cart"} />
        </div>
      );
    });
  };
  return <div className="cart">{cartItems()}</div>;
};
export default Cart;
