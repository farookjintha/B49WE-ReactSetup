import "./home.css";
import ProductCard from "../ProductCard/productCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Home = (props) => {
  let [searchParams] = useSearchParams();

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
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// Props Drilling - When data is passed to two or more children components
