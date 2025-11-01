export default function GrowBeyondSection() {
  return (
    <section
      className="w-screen h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/lorry-image-1.png')" }}
    >
      {/* Content Overlay - Left Text */}
      <div className="w-full max-w-7xl mx-auto flex items-center">
        <div className="md:pl-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-gray-900">
            Let's Grow Beyond<br />
            Borders
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
