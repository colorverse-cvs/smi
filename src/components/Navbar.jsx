import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="w-full bg-white fixed top-0 left-0 z-50 md:shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between [padding-inline-end:unset] shadow-[0_2px_6px_rgba(0,0,0,0.1)] lg:shadow-none">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between [padding-inline-end:unset] \"> */}

          {/* ===== MOBILE VIEW ===== */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Left: Logo */}
            <div
              className="cursor-pointer flex-shrink-0"
              onClick={() => navigate("/")}
            >
              <img
                src="/images/sai-multy-logo.svg"
                alt="SMI Logo"
                className="h-14 w-auto"
              />
            </div>

          
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-12 w-full">
            {/* Left Links */}
            <div className="flex items-center gap-12">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md font-medium transition ${
                  isActive("/")
                    ? "bg-blue-600 text-white"
                    : "text-black hover:text-blue-600"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-md font-medium transition ${
                  isActive("/about")
                    ? "bg-blue-600 text-white"
                    : "text-black hover:text-blue-600"
                }`}
              >
                About SMI
              </Link>
            </div>

            {/* Center Logo */}
            <div
              className="flex-shrink-0 flex justify-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/images/sai-multy-logo.svg"
                alt="SMI Logo"
                className="h-20 w-auto"
              />
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-12">
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md font-medium transition ${
                  isActive("/services")
                    ? "bg-blue-600 text-white"
                    : "text-black hover:text-blue-600"
                }`}
              >
                Services
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md font-medium transition ${
                  isActive("/contact")
                    ? "bg-blue-600 text-white"
                    : "text-black hover:text-blue-600"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <button
            onClick={() => navigate("/inquiry")}
            className="me-4 md:me-0 border border-blue-600 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Inquiry
          </button>
        </div>

        {/* Mobile Dropdown (hamburger menu) */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About SMI" },
              { path: "/services", label: "Services" },
              { path: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`${
                  isActive(link.path)
                    ? "text-blue-600 font-semibold"
                    : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                navigate("/inquiry");
                setMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Inquiry
            </button>
          </div>
        )}
      </nav>

      {/* Spacer for Desktop Navbar */}
      <div className="h-24 hidden lg:block"></div>

      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.1)] flex justify-around items-center py-2 z-50">
      <Link
        to="/"
        className={`flex flex-col items-center text-xs ${
          isActive("/") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        <img
          src={
            isActive("/")
              ? "/icons/home-page-icon-blue.svg"
              : "/icons/home-page-icon.svg"
          }
          alt="home"
          className="w-6 h-6 mb-1"
        />
        Home
      </Link>

      <Link
        to="/about"
        className={`flex flex-col items-center text-xs ${
          isActive("/about") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        <img
          src={
            isActive("/about")
              ? "/icons/about-page-icon-blue.svg"
              : "/icons/about-page-icon.svg"
          }
          alt="about"
          className="w-6 h-6 mb-1"
        />
        About
      </Link>

      <Link
        to="/services"
        className={`flex flex-col items-center text-xs ${
          isActive("/services") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        <img
          src={
            isActive("/services")
              ? "/icons/service-page-icon-blue.svg"
              : "/icons/service-page-icon.svg"
          }
          alt="services"
          className="w-6 h-6 mb-1"
        />
        Services
      </Link>

      <Link
        to="/contact"
        className={`flex flex-col items-center text-xs ${
          isActive("/contact") ? "text-blue-600" : "text-gray-600"
        }`}
      >
        <img
          src={
            isActive("/contact")
              ? "/icons/contact-page-icon-blue.svg"
              : "/icons/contact-page-icon.svg"
          }
          alt="contact"
          className="w-6 h-6 mb-1"
        />
        Contact
      </Link>
    </div>


    </>
  );
}
