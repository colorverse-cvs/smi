export default function ServiceBanner() {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/service-banner.svg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 lg:px-20 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          At Sai Maulty International, we simplify global trade with dependable,
          end-to-end import and export services. Our expertise spans multiple
          industries — from Chemicals and Fertilizers to Pharmaceuticals and
          Electronics — ensuring that every partnership we build is backed by
          transparency, precision, and reliability.
        </p>
      </div>
    </section>
  );
}
