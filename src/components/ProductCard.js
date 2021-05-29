import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProdContext, CartContext } from "../App";

const ProductCard = ({ item }) => {
  const { setProd } = useContext(ProdContext);
  const { cart } = useContext(CartContext);

  let handleClick = () => {
    let correctItem = item.id in cart ? cart[item.id] : item;
    setProd(correctItem);
  };
  return (

      <Link className="card-link" onClick={handleClick} to={`/item/${item.id}`}>
        <img alt="PC Case" src={item.img} className="product-image"></img>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </Link>
  );
};
export default ProductCard;
