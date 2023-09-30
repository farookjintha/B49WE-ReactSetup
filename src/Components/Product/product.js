import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  useEffect(() => {
    console.log("Params: ", params);
  }, []);

  return (
    <div>
      <h2> Product Name: {params.productName}</h2>
      <h2> Variant: {params.variant}</h2>
      <h2> Color: {params.color}</h2>
    </div>
  );
};

export default Product;
