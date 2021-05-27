import ProductCard from "./ProductCard";

const Item = ({ location }) => {
  const { name, image, price } = location.state;
  return (
    <div className="item-page">
      <img alt="case" className="item-image" src={image}></img>
      <div className="item-description">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        <form className="item-quantity-form">
          <div className="item-quantity">
            <button className="item-quantity-btn">-</button>
            <input className="item-input" type="text" placeholder="0"></input>
            <button className="item-quantity-btn">+</button>
          </div>
          <button className="add-to-cart">Add to cart</button>
        </form>
      </div>
    </div>
  );
};
export default Item;
