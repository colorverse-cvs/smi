export default function InquiryDetatilSection() {
    const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
    "Singapore",
    "United Arab Emirates",
    "Saudi Arabia",
    "Russia",
    "Spain",
    "Netherlands",
    "Mexico",
    "South Korea",
  ];

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10 px-6 md:px-60 lg:px-19 py-10">
      {/* LEFT SIDE — Image Banner */}
      <div
        className="relative flex-1 rounded-xl overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[460px] flex flex-col justify-end text-white"
        style={{ backgroundImage: "url('/images/inquiry-banner.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content (Bottom-aligned) */}
        <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full">
          {/* Text Section */}
          <div className="mt-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Contact us</h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-lg">
              We are deeply committed to delivering unparalleled service and
              unwavering support to ensure your experience exceeds expectations.
            </p>
          </div>

          {/* Contact Info (bottom right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <img src="/icons/phone-call-icon-footer.svg" alt="mail icon" className="w-5 h-5" />
              <p>(+91) 678 555 5643</p>
            </div>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <img src="/icons/mail-icon.svg" alt="mail icon" className="w-5 h-5" />
              <p>demomail@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Contact Form */}
      <div className="flex-1 max-w-md bg-white rounded-xl">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Contact Details
        </h3>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comapny Name (optional)
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Import to
      </label>

      <div className="relative">
        <select
          className="appearance-none w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-4 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          defaultValue="India"
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* Down Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            className="w-5 h-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Continue to product details
          </button>
        </form>
      </div>
    </section>
  );
}
