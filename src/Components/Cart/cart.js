import "./cart.css";
import { useSelector } from "react-redux";

const Cart = (props) => {
  // JS LOGIC
  const cartDataFromStore = useSelector((store) => store.cart);
  const { cartItems } = cartDataFromStore;

  return (
    <div>
      {cartItems && cartItems.length ? (
        <div>
          <h1>Your cart has</h1>
          <div className="list-container">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h2>Product: {item.name}</h2>
                <h3>Quantity: 1</h3>
                <h3>Price: {item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Empty Cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
