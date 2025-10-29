import { useContext } from "react";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./CommonSections/Footer";

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
      <Navbar />
      <Home />
      <ProductList />
      <Footer />
    </ProductProvider>
  );
};

export default App;
