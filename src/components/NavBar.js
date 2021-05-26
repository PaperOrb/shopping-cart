import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-btn home-btn">
        Home
      </Link>
      <div className="nav__right-wrapper">
        <Link to="/shop" className="nav-btn shop-btn">
          Shop
        </Link>
        <Link to="/cart" className="nav-btn cart-btn">
          Cart
        </Link>
        <a href="https://github.com/PaperOrb/shopping-cart">
          <FontAwesomeIcon icon={["fab", "github"]} className="github-icon nav-btn" />
        </a>
      </div>
    </div>
  );
};
export default NavBar;
