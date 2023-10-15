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

  useEffect(() => {
    const param1 = searchParams.get("message");
    const param2 = searchParams.get("brand");
    console.log("Search Params: Message: ", param1);
    console.log("Search Params: Brand: ", param2);
  }, []);

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
