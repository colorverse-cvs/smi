export default function OurMissionSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Sai Multy International, our mission is simple: to deliver quality
            products, ensure seamless logistics, and help our partners expand in
            international markets.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-3">
            We connect businesses worldwide with dependable import and export
            solutions. Backed by decades of expertise and a strong global
            network, we specialize in Agriculture, Pharmaceuticals, Minerals,
            and more.
          </p>
        </div>

        {/* Right: Image with Blue Gradient Background */}
        <div className="w-full md:w-full flex justify-center">
          <div className="bg-gradient-to-b from-[#8ED1FC] to-[#1E90FF] rounded-2xl shadow-lg">
            <img
              src="/images/mission-handshake.svg"
              alt="Our Mission"
              className="w-full max-w-md rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
