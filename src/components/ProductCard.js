import { Link } from "react-router-dom";

const ProductCard = ({ image, price, name }) => {
  return (
    <Link to="/item">
      <button className="productcard">
        <img alt="PC Case" src={image} className="product-image"></img>
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </button>
    </Link>
  );
};
export default ProductCard;
