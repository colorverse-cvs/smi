import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Service from "./pages/Services/Service";
import ContactUs from "./pages/ContactUs/Contact";
import Inquiry from "./pages/Inquiry/Inquiry";
import ExploreProduct from "./pages/ExploreProduct/ExploreProduct";
import ProductSpecification from "./pages/ProductDescription/Sections/ProductSpecification";

import Navbar from "./components/Navbar";
import Footer from "./CommonSections/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

import "./App.css";
 

const App = () => {
  return (

    <ProductProvider>
      <Router>
        {/* ✅ Scrolls to top on every route change */}
        <ScrollToTop />

        <Navbar />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/exploreProduct" element={<ExploreProduct />} />
            <Route path="/productSpecification" element={<ProductSpecification />} />
          </Routes>

          {/* <ProductList /> */}
        </div>

        <Footer />
      </Router>
    </ProductProvider>
  );
};

export default App;
