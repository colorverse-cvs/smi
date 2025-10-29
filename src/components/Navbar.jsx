import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Home
          </button>
          <a href="#about" className="font-medium text-black hover:text-blue-600">
            About SMI
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/sai-multy-logo.svg"
            alt="SMI Logo"
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#services" className="font-medium text-black hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="font-medium text-black hover:text-blue-600">
            Contact Us
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Inquiry
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t">
          <a href="#home" className="text-blue-600 font-semibold">
            Home
          </a>
          <a href="#about" className="text-black font-medium">
            About SMI
          </a>
          <a href="#services" className="text-black font-medium">
            Services
          </a>
          <a href="#contact" className="text-black font-medium">
            Contact Us
          </a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Inquiry
          </button>
        </div>
      )}
    </nav>
  );
}
