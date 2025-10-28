import { useContext } from "react";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";
import Home from "./pages/Home/Home";

import './App.css';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  console.log("product ", products);

  return (
    <div>
      
    </div>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <Home />
      <ProductList />
    </ProductProvider>
  );
};

export default App;
