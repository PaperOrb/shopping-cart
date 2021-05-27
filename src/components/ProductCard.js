import { Link } from "react-router-dom";

const ProductCard = ({ image, price, name }) => {
  return (
    <Link
      className="productcard"
      to={{
        pathname: "/item",
        state: {
          name: name,
          image: image,
          price: price,
        },
      }}
    >
      <img alt="PC Case" src={image} className="product-image"></img>
      <div>{name}</div>
      <div>{price}</div>
    </Link>
  );
};
export default ProductCard;
