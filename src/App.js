import "./App.css";

import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Profile from "./Components/Profile/profile";
import Chat from "./Components/Chat/chat";
import Settings from "./Components/Settings/settings";
import { createContext, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/cart";
import Product from "./Components/Product/product";
import Login from "./Components/Login/login";

const products_list = [
  {
    id: 1,
    name: "Apple IPhone 15",
    price: "Rs. 79,990",
    brand: "Apple",
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
    brand: "Apple",
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Apple IPhone 13",
    price: "Rs. 59,990",
    quantity: 60,
    brand: "Apple",
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Apple IPhone 15 Pro",
    price: "Rs. 1,49,990",
    description: "Latest Release",
    quantity: 15,
    brand: "Apple",
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Apple IPhone 14 Pro",
    price: "Rs. 1,29,990",
    quantity: 30,
    brand: "Apple",
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Apple IPhone 13 Pro",
    price: "Rs. 1,19,990",
    quantity: 25,
    brand: "Apple",
    imgUrl:
      "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra",
    price: "Rs. 1,29,990",
    quantity: 20,
    brand: "Samsung",
    imgUrl:
      "https://cdn1.smartprix.com/rx-izLSMVlI0-w420-h420/samsung-galaxy-s23-u.jpg",
  },
  {
    id: 8,
    name: "Samsung Galaxy S23",
    price: "Rs. 79,999",
    quantity: 25,
    brand: "Samsung",
    imgUrl:
      "https://m.media-amazon.com/images/I/61OvxXhQgZL._AC_UF894,1000_QL80_.jpg",
  },
];

export const AppContext = createContext(null); // Creating the context

function App() {
  const [products, setProducts] = useState(products_list);
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const addToCart = (newItem) => {
    setCartItems((cartItems) => [...cartItems, newItem]);
  };

  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) =>
      cartItems.filter((item) => item.id !== itemToBeRemoved.id)
    );
  };

  useEffect(() => {
    setCurrentUser({
      name: "John",
      email: "john@gmail.com",
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ products, currentUser, cartItems, addToCart, removeFromCart }}
    >
      <div className="App">
        <Header cartCount={cartItems.length} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home products={products} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          {/* Handling Path Parameters */}
          <Route
            path="/products/:productName/:variant/:color"
            element={<Product />}
          />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;

// Parent -> Children

// AppComponent -> Parent

// Component A
// Component B
// Component C

// 1. Create the context -> createContext
// 2 .Providing the context -> <ProductContext.Provider value={data}> </ProductContext.Provider>
// 3. Consuming the context -> useContext
