import "./productCard.css";

const ProductCard = (props) => {
  const { product, cartItems, addToCart, removeFromCart } = props;

  const addingItemToCart = (item) => {
    console.log("Adding Product: ", item);
    addToCart({ ...item, quantity: 1 });
  };

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };
  return (
    <div className="product-container">
      <h2>Product Name: {product.name} </h2>
      {product.description && (
        <div className="description">{product.description}</div>
      )}
      <h2>Price: {product.price} </h2>
      {product.imgUrl && (
        <div>
          <img
            className="product-image"
            src={product.imgUrl}
            alt={product.name}
          />
        </div>
      )}
      <div className="info">
        {product.quantity < 20 ? (
          <span className="few-items">Only few items left!</span>
        ) : (
          <span className="available">Available</span>
        )}
      </div>
      <div className="button-container">
        {cartItems.some((item) => item.id === product.id) ? (
          <div
            className="remove-from-cart"
            onClick={() => removingItemFromCart(product)}
          >
            Remove from cart
          </div>
        ) : (
          <div
            className="add-to-cart"
            onClick={() => addingItemToCart(product)}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

// var result = 5 > 10 ? "5 is greater" : "10 is greater";
