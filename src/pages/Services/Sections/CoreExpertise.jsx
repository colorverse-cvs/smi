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
    <section className="bg-[#111111] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Expertise</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We connect businesses worldwide with dependable import and export
            solutions. Backed by decades of expertise and a strong global
            network, we serve as your trusted partner in expanding international
            markets.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our specialization spans critical global trade sectors, including:
          </p>
        </div>

        {/* Right Expertise Pills */}
        <div className="flex flex-wrap gap-4">
          {sectors.map((item, index) => (
            <span
              key={index}
              className="border border-blue-600 text-white px-5 py-2 rounded-full text-sm md:text-base hover:bg-blue-600 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
