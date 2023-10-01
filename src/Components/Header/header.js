import "./header.css";
import CartIcon from "../../assets/icons/cart-icon.png";
import ProfileIcon from "../../assets/icons/profile-user.png";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Header = (props) => {
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate(); // hook from react router dom

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="header-container">
      <div className="left">
        <div className="logo" onClick={navigateToHome}>
          electronicBay
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <Link className="link" to="/profile">
              Profile
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/settings">
              Settings
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/chat">
              Messages
            </Link>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="cart-icon">
          <img
            src={CartIcon}
            alt="Cart"
            width={30}
            height={30}
            onClick={navigateToCart}
          />
          <span className="cart-count">{props.cartCount}</span>
        </div>
        <div className="profile" onClick={() => navigate("/profile")}>
          <img src={ProfileIcon} alt="Profile" width={30} height={30} />
          <span className="profile-name">{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import Header from './' - importing default exports.
// import { myName } from './' - importing normal exports.
