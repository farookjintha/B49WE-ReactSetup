import "./home.css";
import ProductCard from "../ProductCard/productCard";

const Home = (props) => {
  // props = {
  //   products: [],
  //   name: '',
  //   city: ''
  // }
  // props -> when data is sent from parent to child
  // JS LOGIC

  //   const { products, name, city } = props;

  return (
    <div className="home-container">
      {/* <h1 className="heading" id="headingId">
        HOME COMPONENT
      </h1> */}
      <h1>PRODUCTS: </h1>
      <div className="products-container">
        {props.products.map((product, index) => (
          <ProductCard
            product={product}
            cartItems={props.cartItems}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

// Props Drilling - When data is passed to two or more children components
