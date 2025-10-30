import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 border rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-6">
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
            className="flex-shrink-0 flex justify-center cursor-pointer mx-6"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/sai-multy-logo.svg"
              alt="SMI Logo"
              className="h-20 w-auto"  // 👈 bigger logo (was h-14)
            />
          </div>

          {/* Right Links */}
          <div className="hidden lg:flex items-center gap-6">
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

            <button
              onClick={() => navigate("/inquiry")}
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
            >
              Inquiry
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
              className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Inquiry
            </button>
          </div>
        )}
      </nav>

      {/* Add spacing below navbar */}
      <div className="h-24"></div> {/* 👈 pushes page content down */}
    </>
  );
}
