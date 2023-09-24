import "./header.css";
import CartIcon from "../../assets/icons/cart-icon.png";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="left">
        <div className="logo">electronicBay</div>
      </div>
      <div className="right">
        <div className="cart-icon">
          <img src={CartIcon} alt="Cart" width={30} height={30} />
          <span className="cart-count">{props.cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import Header from './' - importing default exports.
// import { myName } from './' - importing normal exports.
