import { useContext } from "react";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";
// import Home from "./pages/Home/Home";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Service from "./pages/Services/Service";
import ContactUs from "./pages/ContactUs/Contact";

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
      {/* <Home /> */}
      {/* <AboutUs/> */}
      {/* <Service /> */}
      <ContactUs />
      <ProductList />
      <Footer />
    </ProductProvider>
  );
};

export default App;
