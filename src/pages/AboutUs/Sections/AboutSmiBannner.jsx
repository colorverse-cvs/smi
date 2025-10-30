export default function AboutSmiBanner() {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/about-smi-banner.svg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Text content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 text-white max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          About SMI
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          At Sai Maulty International, we believe trade is more than just business — 
          it’s about building lasting partnerships that empower growth worldwide. 
          With decades of experience in import and export, we connect industries across borders, 
          delivering products that meet global standards of quality, safety, and reliability.
        </p>
      </div>
    </section>
  );
}
