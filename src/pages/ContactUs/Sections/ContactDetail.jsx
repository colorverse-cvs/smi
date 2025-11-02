export default function ContactDetail() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10 px-2 md:px-64 lg:px-19 py-10">
      {/* LEFT SIDE — Image Banner */}
      <div
        className="relative flex-1 rounded-xl overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[460px] flex flex-col justify-end text-white"
        style={{ backgroundImage: "url('/images/contact-banner.png')" }}
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
      <div className="flex-1 max-w-md bg-white rounded-xl px-4">
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
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Additional Requirement
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-200 bg-gray-50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
