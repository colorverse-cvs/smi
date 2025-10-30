import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Service from "./pages/Services/Service";
import ContactUs from "./pages/ContactUs/Contact";
import Inquiry from "./pages/Inquiry/Inquiry";

import Navbar from "./components/Navbar";
import Footer from "./CommonSections/Footer";

import "./App.css";

// Optional ProductList (for debugging or future UI)
const ProductList = () => {
  const { products } = useContext(ProductContext);
  console.log("product ", products);

  return <div>{/* You can render product cards here later */}</div>;
};

const App = () => {
  return (
    <ProductProvider>
      <Router>
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Page content (only one route at a time) */}
        <div className="pt-16"> {/* add padding to avoid overlap with fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>

          {/* Optional: Product debug component */}
          <ProductList />
        </div>

        {/* Footer stays fixed at bottom */}
        <Footer />
      </Router>
    </ProductProvider>
  );
};

export default App;
