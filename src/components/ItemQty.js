import { useContext } from "react";
import { ProdContext } from "../App";

let ItemQty = ({ addBtnVisibility, item }) => {
  const { setProd } = useContext(ProdContext);

  let handleClick = (event) => {
    event.preventDefault();
    let input = document.getElementById(item.id);
    let amount = event.target.classList.contains("add") ? 1 : -1;

    setProd(() => {
      let copy = { ...item };
      copy.qty = Number(input.value) + amount;
      if (copy.qty < 0) copy.qty = 0;
      return copy;
    });
  };

  let handleInput = () => {
    console.log("handle input");
  };

  return (
    <form className="item-quantity-form">
      <div className="item-quantity">
        <button className="item-quantity-btn remove" onClick={handleClick}>
          -
        </button>
        <input id={item.id} className="item-input" type="text" value={item.qty} onChange={handleInput}></input>
        <button className="item-quantity-btn add" onClick={handleClick}>
          +
        </button>
      </div>
      <button className={`add-to-cart ${addBtnVisibility}`}>Add to cart</button>
    </form>
  );
};

export default ItemQty;
