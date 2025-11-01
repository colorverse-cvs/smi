export default function OurFounderSection() {
  return (
    <section className="w-full bg-[#F6F6F7] py-24 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-16 max-w-7xl mx-auto">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-4xl font-semibold mb-8 text-[#111111]">
            Our Founders
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed text-base md:text-lg">
            The driving force behind Sai Maulty International lies in the shared
            vision of our Founder,{" "}
            <span className="font-semibold text-black">Jack Daniels</span> and
            Co-Founder,{" "}
            <span className="font-semibold text-black">Mary Sitaraman</span>.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed text-base md:text-lg">
            Together, they bring decades of combined experience in global trade,
            logistics, and business strategy — united by a single mission: to
            redefine reliability and trust in international commerce.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Through their guidance, Sai Maulty International has evolved from a
            promising venture into a trusted global network that connects
            industries, strengthens trade relationships, and delivers value
            beyond borders.
          </p>
        </div>

        {/* Right Side - Founder Cards */}
      <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-sm py-10 px-4 flex flex-row items-center justify-center gap-4 sm:gap-8">
        {/* Founder 1 */}
        <div className="flex flex-col items-center text-center w-1/2">
          <img
            src="/images/owner-1.png"
            alt="Jack Daniels"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl object-cover mb-3"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#111111]">
            Jack Daniels
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Founder, and CEO</p>
        </div>

        {/* Founder 2 */}
        <div className="flex flex-col items-center text-center w-1/2">
          <img
            src="/images/owner-2.png"
            alt="Mary Sitaraman"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl object-cover mb-3"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-[#111111]">
            Mary Sitaraman
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Co-Founder, and CTO</p>
        </div>
      </div>


      </div>
    </section>
  );
}
