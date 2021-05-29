import ItemQty from "./ItemQty";
import { useContext } from "react";
import { ProdContext } from "../App";

const Item = () => {
  const { currentProd } = useContext(ProdContext);

  return (
    <div className="item-page">
      <img alt="case" className="item-image" src={currentProd.img}></img>
      <div className="item-description">
        <div className="item-name">{currentProd.name}</div>
        <div className="item-price">{currentProd.price}</div>
        <ItemQty item={currentProd} />
      </div>
    </div>
  );
};
export default Item;
