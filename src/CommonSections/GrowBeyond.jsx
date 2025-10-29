export default function GrowBeyondSection() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/images/grow-beyond.svg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* --- Left Text --- */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Let’s Grow Beyond Borders
          </h2>

          <p className="mt-5 text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Partner with{" "}
            <span className="font-semibold text-blue-600">
              Sai Multy International
            </span>{" "}
            and experience trade without boundaries — quality, efficiency, and trust in every shipment.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
              Contact Us Today
              <img
                src="/icons/mail-icon.svg"
                alt="mail icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
