import "./App.css";

import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { useState } from "react";

var myName = "John";

const products_list = [
  {
    id: 1,
    name: "Apple IPhone 15",
    price: "Rs. 79,990",
    description: "Latest Release",
    quantity: 10,
    imgUrl:
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
  },
  {
    id: 2,
    name: "Apple IPhone 14",
    price: "Rs. 69,990",
    quantity: 50,
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Apple IPhone 13",
    price: "Rs. 59,990",
    quantity: 60,
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Apple IPhone 15 Pro",
    price: "Rs. 1,49,990",
    description: "Latest Release",
    quantity: 15,
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Apple IPhone 14 Pro",
    price: "Rs. 1,29,990",
    quantity: 30,
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Apple IPhone 13 Pro",
    price: "Rs. 1,19,990",
    quantity: 25,
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra",
    price: "Rs. 1,29,990",
    quantity: 20,
    imgUrl:
      "https://cdn1.smartprix.com/rx-izLSMVlI0-w420-h420/samsung-galaxy-s23-u.jpg",
  },
  {
    id: 8,
    name: "Samsung Galaxy S23",
    price: "Rs. 79,999",
    quantity: 25,
    imgUrl:
      "https://m.media-amazon.com/images/I/61OvxXhQgZL._AC_UF894,1000_QL80_.jpg",
  },
];

function App() {
  const [products, setProducts] = useState(products_list);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((cartItems) => [...cartItems, newItem]);
    // if (cartItems.some((item) => item.id === newItem.id)) {
    //   setCartItems((cart) =>
    //     cart.map((item) =>
    //       item.id === newItem.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     )
    //   );
    // } else {
    //   setCartItems((cart) => [...cart, newItem]);
    // }
  };

  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) =>
      cartItems.filter((item) => item.id !== itemToBeRemoved.id)
    );
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.length} />
      <Home
        products={products}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        name={myName}
        city={"Chennai"}
      />
      <Footer />
    </div>
  );
}

export default App;

// Parent -> Children

// AppComponent -> Parent

// Component A
// Component B
// Component C
