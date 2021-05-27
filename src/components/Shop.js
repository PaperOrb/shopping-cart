import ProductCard from "../components/ProductCard";

const Shop = ({ products }) => {
  let productCards = () => {
    return products[0].map((item, index) => {
      return <ProductCard key={index} image={item.img} price={item.price} name={item.name} />;
    });
  };
  return <div className="shop">{productCards()}</div>;
};

export default Shop;
