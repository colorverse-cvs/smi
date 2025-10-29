export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left Section - Logo and Name */}
        <div>
          <img
            src="/icons/sai-multy-icon-footer.svg"
            alt="Sai Multy International"
            className="h-20 w-auto mb-4"
          />
          <h2 className="text-white text-xl font-semibold leading-tight">
            Sai Multy <br /> International
          </h2>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About SMI</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src="/icons/phone-call-icon-footer.svg" alt="phone" className="h-4 w-4" />
              <span>(+91) 678 555 5643</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/icons/mailbox-icon-footer.svg" alt="mail" className="h-4 w-4" />
              <span>demoemail@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Join the Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest updates on global trade trends, industry insights, and exclusive offers
            straight to your inbox. No spam, just valuable updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-700 text-gray-200 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-10 px-6 lg:px-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © 2025 <span className="font-semibold text-white">Sai Multy International</span>. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition">
            <img src="/icons/mail-icon-footer.svg" alt="gmail" className="h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition">
            <img src="/icons/insta-icon.svg" alt="instagram" className="h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition">
            <img src="/icons/whatsapp-icon.svg" alt="whatsapp" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
