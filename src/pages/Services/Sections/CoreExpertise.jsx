export default function CoreExpertiseSection() {
  const sectors = [
    "Chemical fertilizers",
    "Pharmaceuticals",
    "Electronics",
    "Metals & Minerals",
    "Agriculture Products",
    "Industrial supplies",
    "Hotel/Resort supplies",
  ];

  return (
    <section className="bg-[#1A1A1A] text-white py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Core Expertise
          </h2>
          <p className="text-gray-300 mb-5 leading-relaxed text-base md:text-lg">
            We connect businesses worldwide with dependable import and export
            solutions. Backed by decades of expertise and a strong global
            network, we serve as your trusted partner in expanding international
            markets.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Our specialization spans critical global trade sectors, including:
          </p>
        </div>

        {/* Right Expertise Pills */}
        <div className="flex flex-wrap gap-5">
          {sectors.map((item, index) => (
            <span
              key={index}
              className="border border-blue-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
