import ProductCard from "../components/ProductCard";

const Shop = ({ products }) => {
  let productCards = () => {
    let prodKeys = Object.keys(products);
    return prodKeys.map((key) => {
      return (
        <div key={key} className="productcard">
          <ProductCard item={products[key]} />
        </div>
      );
    });
  };

  return <div className="shop">{productCards()}</div>;
};

export default Shop;
